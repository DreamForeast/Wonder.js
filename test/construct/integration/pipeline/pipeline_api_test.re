open Wonder_jest;

let _ =
  describe("test pipeline api", () => {
    open Expect;
    open Expect.Operators;
    open Sinon;

    let sandbox = getSandboxDefaultVal();

    beforeEach(() => {
      sandbox := createSandbox();
      TestTool.init(~sandbox, ());
    });
    afterEach(() => restoreSandbox(refJsObjToSandbox(sandbox^)));

    describe("get/set pipeline stream", () => {
      test("test", () => {
        let (pipeline, pipelineStream) =
          (
            {
              name: "init",
              firstGroup: "frame",
              groups: [{name: "frame", link: Concat, elements: []}],
            }: PipelineVOType.pipelineData
          )
          ->PipelineRunAPI.parsePipelineData
          ->ResultTool.getExnSuccessValue;

        PipelineRunAPI.setPipelineStream(pipeline, pipelineStream);

        PipelineRunAPI.getPipelineStream(pipeline)->expect
        == pipelineStream->Some;
      })
    });

    describe("exec pipeline stream", () => {
      let _createPipeline = (~pipelineName="init", ()) =>
        pipelineName->PipelineEntity.create;

      let _createJob = (~jobName, ~execFunc) => {
        (jobName->JobEntity.create, execFunc);
      };

      let _registerJobs = (~jobs, ~pipeline=_createPipeline(), ()) => {
        JobCPDoService._register(pipeline, jobs);
      };

      let _execPipelineStream =
          (
            ~pipelineData,
            ~handleSuccessFunc,
            ~handleFailFunc=ResultTool.buildEmptyHandleFailFunc(),
            (),
          ) => {
        let (_, pipelineStream) =
          pipelineData
          ->PipelineRunAPI.parsePipelineData
          ->ResultTool.getExnSuccessValue;

        PipelineRunAPI.execPipelineStream(handleFailFunc, pipelineStream)
        ->Js.Promise.then_(
            () => {handleSuccessFunc()->Js.Promise.resolve},
            _,
          );
      };

      testPromise("test exec single job success", () => {
        let gameObject = ref((-1)->GameObjectEntity.create);
        _registerJobs(
          ~jobs=[
            _createJob(~jobName="set_scene_gameObject", ~execFunc=() => {
              gameObject :=
                GameObjectRunAPI.create()->ResultTool.getExnSuccessValue;

              SceneRunAPI.setSceneGameObject(gameObject^);

              Result.succeed()->WonderBsMost.Most.just;
            }),
          ],
          (),
        );

        _execPipelineStream(
          ~pipelineData={
                          name: "init",
                          firstGroup: "frame",
                          groups: [
                            {
                              name: "frame",
                              link: Concat,
                              elements: [
                                {name: "set_scene_gameObject", type_: Job},
                              ],
                            },
                          ],
                        }: PipelineVOType.pipelineData,
          ~handleSuccessFunc=
            () => {
              SceneRunAPI.getSceneGameObject()->expect == (gameObject^)->Some
            },
          (),
        );
      });
      // TODO test merge jobs
      testPromise("test concat two jobs", () => {
        let gameObject1 = ref((-1)->GameObjectEntity.create);
        let gameObject2 = ref((-1)->GameObjectEntity.create);
        _registerJobs(
          ~jobs=[
            _createJob(~jobName="set_scene_gameObject2", ~execFunc=() => {
              gameObject2 := 10->GameObjectEntity.create;

              SceneRunAPI.setSceneGameObject(gameObject2^);

              Result.succeed()->WonderBsMost.Most.just;
            }),
            _createJob(~jobName="set_scene_gameObject1", ~execFunc=() => {
              gameObject1 :=
                GameObjectRunAPI.create()->ResultTool.getExnSuccessValue;

              SceneRunAPI.setSceneGameObject(gameObject1^);

              Result.succeed()->WonderBsMost.Most.just;
            }),
          ],
          (),
        );

        _execPipelineStream(
          ~pipelineData={
                          name: "init",
                          firstGroup: "frame",
                          groups: [
                            {
                              name: "frame",
                              link: Concat,
                              elements: [
                                {name: "set_scene_gameObject1", type_: Job},
                                {name: "set_scene_gameObject2", type_: Job},
                              ],
                            },
                          ],
                        }: PipelineVOType.pipelineData,
          ~handleSuccessFunc=
            () => {
              SceneRunAPI.getSceneGameObject()->expect == (gameObject2^)->Some
            },
          (),
        );
      });
      testPromise("exec single job fail", () => {
        let message = "fail!";
        let resultMessage = ref("");
        _registerJobs(
          ~jobs=[
            _createJob(~jobName="fail", ~execFunc=() => {
              Result.failWith(message)->WonderBsMost.Most.just
            }),
          ],
          (),
        );

        _execPipelineStream(
          ~pipelineData={
                          name: "init",
                          firstGroup: "frame",
                          groups: [
                            {
                              name: "frame",
                              link: Concat,
                              elements: [{name: "fail", type_: Job}],
                            },
                          ],
                        }: PipelineVOType.pipelineData,
          ~handleFailFunc=
            err => {resultMessage := err->Js.Exn.message->OptionSt.getExn},
          ~handleSuccessFunc=() => {(resultMessage^)->expect == message},
          (),
        );
      });
    });
  });
