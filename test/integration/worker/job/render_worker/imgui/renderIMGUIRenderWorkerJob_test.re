open Wonder_jest;

open Js.Promise;

open WonderImgui.IMGUIType;

let _ =
  describe("test render imgui render worker job", () => {
    open Expect;
    open Expect.Operators;
    open Sinon;

    let sandbox = getSandboxDefaultVal();
    let state = ref(MainStateTool.createState());

    beforeEach(() => sandbox := createSandbox());
    afterEach(() => TestWorkerTool.clear(sandbox));

    describe("test send render data to render worker", () => {
      let _prepare = () =>
        IMGUIWorkerTool.prepareForTestSendRenderData(sandbox);

      testPromise("send ioData", () => {
        open IMGUIType;

        let ioData = {
          pointUp: true,
          pointDown: true,
          pointPosition: (0, 1),
          pointMovementDelta: (1, 2),
        };
        let (state, postMessageToRenderWorker) = _prepare();
        let state = IMGUITool.setIOData(ioData, state);
        MainStateTool.setState(state);

        WorkerJobWorkerTool.execMainWorkerJob(
          ~execJobFunc=SendRenderDataMainWorkerJob.execJob,
          ~completeFunc=
            _ =>
              postMessageToRenderWorker
              |> expect
              |> toCalledWith([|
                   SendRenderRenderDataWorkerTool.buildRenderRenderData(
                     ~imguiData={
                       "ioData": ioData,
                       "execFuncDataArr": Sinon.matchAny,
                     },
                     (),
                   ),
                 |])
              |> resolve,
          (),
        );
      });

      describe("reset io data->point event state when point up", () =>
        testPromise("test io data after send data", () => {
          open IMGUIType;

          let ioData = {
            pointUp: true,
            pointDown: true,
            pointPosition: (0, 1),
            pointMovementDelta: (1, 2),
          };
          let (state, postMessageToRenderWorker) = _prepare();
          let state = IMGUITool.setIOData(ioData, state);
          MainStateTool.setState(state);

          WorkerJobWorkerTool.execMainWorkerJob(
            ~execJobFunc=SendRenderDataMainWorkerJob.execJob,
            ~completeFunc=
              _ => {
                let state = MainStateTool.unsafeGetState();

                IMGUITool.getIOData(state)
                |> expect == {...ioData, pointUp: false, pointDown: false}
                |> resolve;
              },
            (),
          );
        })
      );

      describe("send execData", () => {
        let _buildData = () => (
          (. _, _, state) => state,
          Obj.magic((100, a => a + 1)),
        );

        describe(
          "if is already set execData in render worker, not set again", () =>
          describe("send none", () => {
            testPromise("test two loops", () => {
              let (state, postMessageToRenderWorker) = _prepare();
              let (execFunc, customData) = _buildData();
              let state =
                ExecIMGUITool.addExecFuncData(
                  ~state,
                  ~customData,
                  ~func=execFunc,
                  (),
                );
              MainStateTool.setState(state);

              WorkerJobWorkerTool.execMainWorkerJob(
                ~execJobFunc=SendRenderDataMainWorkerJob.execJob,
                ~completeFunc=
                  _ =>
                    WorkerJobWorkerTool.execMainWorkerJob(
                      ~execJobFunc=SendRenderDataMainWorkerJob.execJob,
                      ~completeFunc=
                        _ =>
                          postMessageToRenderWorker
                          |> expect
                          |> toCalledWith([|
                               SendRenderRenderDataWorkerTool.buildRenderRenderData(
                                 ~imguiData={
                                   "ioData": Sinon.matchAny,
                                   "execFuncDataArr":
                                     ExecIMGUITool.createEmptyExecFuncDataArr(),
                                 },
                                 (),
                               ),
                             |])
                          |> resolve,
                      (),
                    ),
                (),
              );
            });
            testPromise("test three loops", () => {
              let (state, postMessageToRenderWorker) = _prepare();
              let (execFunc, customData) = _buildData();
              let state =
                ExecIMGUITool.addExecFuncData(
                  ~state,
                  ~customData,
                  ~func=execFunc,
                  (),
                );
              MainStateTool.setState(state);

              WorkerJobWorkerTool.execMainWorkerJob(
                ~execJobFunc=SendRenderDataMainWorkerJob.execJob,
                ~completeFunc=
                  _ =>
                    WorkerJobWorkerTool.execMainWorkerJob(
                      ~execJobFunc=SendRenderDataMainWorkerJob.execJob,
                      ~completeFunc=
                        _ =>
                          WorkerJobWorkerTool.execMainWorkerJob(
                            ~execJobFunc=SendRenderDataMainWorkerJob.execJob,
                            ~completeFunc=
                              _ =>
                                postMessageToRenderWorker
                                |> expect
                                |> toCalledWith([|
                                     SendRenderRenderDataWorkerTool.buildRenderRenderData(
                                       ~imguiData={
                                         "ioData": Sinon.matchAny,
                                         "execFuncDataArr":
                                           ExecIMGUITool.createEmptyExecFuncDataArr(),
                                       },
                                       (),
                                     ),
                                   |])
                                |> resolve,
                            (),
                          ),
                      (),
                    ),
                (),
              );
            });
          })
        );

        describe("else", () =>
          testPromise("send data", () => {
            let (state, postMessageToRenderWorker) = _prepare();
            let (execFunc, customData) = _buildData();
            let execOrder = 1;
            let name = "e1";
            let state =
              ExecIMGUITool.addExecFuncData(
                ~state,
                ~customData,
                ~func=execFunc,
                ~name,
                ~execOrder,
                (),
              );
            MainStateTool.setState(state);

            WorkerJobWorkerTool.execMainWorkerJob(
              ~execJobFunc=SendRenderDataMainWorkerJob.execJob,
              ~completeFunc=
                _ =>
                  postMessageToRenderWorker
                  |> expect
                  |> toCalledWith([|
                       SendRenderRenderDataWorkerTool.buildRenderRenderData(
                         ~imguiData={
                           "ioData": Sinon.matchAny,
                           "execFuncDataArr":
                             SceneGraphIMGUITool.buildExecFuncDataArr(
                               ~name,
                               ~execOrder,
                               ~customData,
                               ~func=execFunc,
                               (),
                             ),
                         },
                         (),
                       ),
                     |])
                  |> resolve,
              (),
            );
          })
        );
      });
    });

    describe("test render worker job", () => {
      beforeAllPromise(() =>
        BasicSourceTextureRenderWorkerTool.buildFakeCreateImageBitmapFunc()
      );
      afterAllPromise(() =>
        BasicSourceTextureRenderWorkerTool.clearFakeCreateImageBitmapFunc()
      );

      describe("test render imgui", () =>
        describe("test render image", () => {
          let _addExecFuncData = (imageX1, execOrder, state) =>
            ExecIMGUITool.addExecFuncData(
              ~state,
              ~execOrder,
              ~customData=
                Obj.magic((
                  WonderImgui.RenderIMGUITool.buildImageData(),
                  imageX1,
                )),
              ~func=
                (. customData, imguiAPIJsObj, state) => {
                  let (
                    (
                      (
                        (_, imageY1, imageWidth1, imageHeight1),
                        (imageS01, imageT01, imageS11, imageT11),
                        textureId1,
                      ),
                      _,
                      _,
                    ),
                    imageX1,
                  ) =
                    Obj.magic(customData);
                  let imguiAPIJsObj = Obj.magic(imguiAPIJsObj);

                  let imageFunc = imguiAPIJsObj##image;

                  let state =
                    imageFunc(.
                      (imageX1, imageY1, imageWidth1, imageHeight1),
                      (imageS01, imageT01, imageS11, imageT11),
                      textureId1,
                      state,
                    );

                  state;
                },
              (),
            );

          testPromise("test single exec func data", () => {
            let (state, bufferData) =
              IMGUIWorkerTool.prepareForTestInRenderWorkerJob(sandbox);

            let state = state |> _addExecFuncData(50, 2);

            let bufferDataCallCountAfterInit = ref(0);
            RenderJobsRenderWorkerTool.initAndMainLoopAndRender(
              ~state,
              ~sandbox,
              ~beforeExecRenderRenderWorkerJobsFunc=
                state => {
                  bufferDataCallCountAfterInit := bufferData |> getCallCount;

                  ();
                },
              ~completeFunc=
                _ =>
                  RenderIMGUITool.judgeCustomTextureProgramPositionBufferData(
                    bufferData,
                    bufferDataCallCountAfterInit^,
                    [|50., 60., 50., 310., 200., 60., 200., 310.|],
                  )
                  |> resolve,
              (),
            );
          });
          testPromise("test two exec func data", () => {
            let (state, bufferData) =
              IMGUIWorkerTool.prepareForTestInRenderWorkerJob(sandbox);

            let state =
              state |> _addExecFuncData(50, 2) |> _addExecFuncData(100, 1);

            let bufferDataCallCountAfterInit = ref(0);
            RenderJobsRenderWorkerTool.initAndMainLoopAndRender(
              ~state,
              ~sandbox,
              ~beforeExecRenderRenderWorkerJobsFunc=
                state => {
                  bufferDataCallCountAfterInit := bufferData |> getCallCount;

                  ();
                },
              ~completeFunc=
                _ =>
                  RenderIMGUITool.judgeCustomTextureProgramPositionBufferData(
                    bufferData,
                    bufferDataCallCountAfterInit^,
                    [|
                      100.,
                      60.,
                      100.,
                      310.,
                      250.,
                      60.,
                      250.,
                      310.,
                      50.,
                      60.,
                      50.,
                      310.,
                      200.,
                      60.,
                      200.,
                      310.,
                    |],
                  )
                  |> resolve,
              (),
            );
          });
        })
      );

      describe("test operate main state if imgui button is click", () =>
        describe(
          {|can't invoke api to operate main state in execFunc!
          instead, should:|},
          () => {
            testPromise(
              {|set custom data to render worker state in execFunc;
                send custom data to main worker when finish render;|},
              () => {
                let (state, bufferData) =
                  IMGUIWorkerTool.prepareForTestInRenderWorkerJob(sandbox);
                let state = RenderIMGUITool.prepareFntData(state);
                let sendedCustomData = 1;
                let ((buttonX1, buttonY1, buttonWidth1, buttonHeight1), str1) as customData =
                  WonderImgui.ButtonIMGUITool.buildButtonData1();
                let state =
                  ExecIMGUITool.addExecFuncData(
                    ~state,
                    ~customData=Obj.magic(customData),
                    ~func=
                      (. customData, imguiAPIJsObj, state) => {
                        let (
                          (buttonX1, buttonY1, buttonWidth1, buttonHeight1),
                          str1,
                        ) =
                          Obj.magic(customData);
                        let imguiAPIJsObj = Obj.magic(imguiAPIJsObj);

                        let buttonFunc = imguiAPIJsObj##button;
                        let setCustomDataFunc =
                          imguiAPIJsObj##setCustomDataFromRenderWorkerToMainWorker;

                        let (state, isButtonClick) =
                          buttonFunc(.
                            (
                              (
                                buttonX1,
                                buttonY1,
                                buttonWidth1,
                                buttonHeight1,
                              ),
                              str1,
                            ),
                            Js.Nullable.null,
                            state,
                          );

                        let state =
                          isButtonClick ?
                            setCustomDataFunc(. sendedCustomData, state) :
                            state;

                        state;
                      },
                    (),
                  );
                let selfPostMessage =
                  RenderJobsRenderWorkerTool.stubSelfPostMessage(sandbox^);
                let state =
                  IMGUITool.setIOData(
                    {
                      pointUp: true,
                      pointDown: true,
                      pointPosition: (buttonX1, buttonY1),
                      pointMovementDelta: (0, 0),
                    },
                    state,
                  );
                let state = state |> BrowserDetectTool.setChrome;

                RenderJobsRenderWorkerTool.initAndMainLoopAndRender(
                  ~state,
                  ~sandbox,
                  ~completeFunc=
                    postMessageToRenderWorker =>
                      selfPostMessage
                      |> expect
                      |> toCalledWith([|
                           GetFinishRenderDataMainWorkerTool.buildFinishRenderData(
                             ~customData=sendedCustomData,
                             (),
                           ),
                         |])
                      |> resolve,
                  (),
                );
              },
            );
            test(
              {|get custom data in main worker;
                (so that in the next frame, user can check custom data in main state and operate main state in main worker)|},
              () => {
                let state = MainStateTool.createState();
                let customData = 1;

                let state =
                  GetFinishRenderDataMainWorkerJob._exec(
                    GetFinishRenderDataMainWorkerTool.buildFinishRenderData(
                      ~customData,
                      (),
                    ),
                    state,
                  );

                WorkerDataTool.getRenderWorkerCustomData(state)
                |> expect == Obj.magic(customData);
              },
            );
          },
        )
      );
    });
  });