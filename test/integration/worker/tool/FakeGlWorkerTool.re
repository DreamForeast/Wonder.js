open Sinon;

let buildFakeGl =
    (
      ~sandbox,
      ~textureWrapS=(-1),
      ~textureWrapT=(-1),
      ~textureMagFilter=(-1),
      ~textureMinFilter=(-1),
      ~repeat=(-1),
      ~mirroredRepeat=(-1),
      ~clampToEdge=(-1),
      ~nearest=(-1),
      ~nearestMipmapNearest=(-1),
      ~nearestMipmapLinear=(-1),
      ~linear=(-1),
      ~linearMipmapNearest=(-1),
      ~linearMipmapLinear=(-1),
      ~rgb=(-1),
      ~rgba=(-1),
      ~alpha=(-1),
      ~luminance=(-1),
      ~luminanceAlpha=(-1),
      ~rgbS3tcDxt1=(-1),
      ~rgbaS3tcDxt1=(-1),
      ~rgbaS3tcDxt3=(-1),
      ~rgbaS3tcDxt5=(-1),
      ~unsignedByte=(-1),
      ~unsignedShort565=(-1),
      ~unsignedShort4444=(-1),
      ~unsignedShort5551=(-1),
      ~unpackFlipYWebgl=(-1),
      ~maxTextureImageUnits=(-1),
      ~texture2D=(-1),
      ~textureUnit0=(-1),
      ~compile_status=(-1),
      ~link_status=(-1),
      ~vertex_shader=(-1),
      ~fragment_shader=(-1),
      ~array_buffer=(-1),
      ~element_array_buffer=(-1),
      ~float=(-1),
      ~none=(-1),
      ~static_draw=(-1),
      ~dynamic_draw=(-1),
      ~points=(-1),
      ~lines=(-1),
      ~triangles=(-1),
      ~unsigned_short=(-1),
      ~unsigned_int=(-1),
      ~color_buffer_bit=(-1),
      ~depth_buffer_bit=(-1),
      ~stencil_buffer_bit=(-1),
      ~back=(-1),
      ~front=(-2),
      ~frontAndBack=(-2),
      ~always=(-1),
      ~never=(-2),
      ~less=(-3),
      ~equal=(-4),
      ~lEqual=(-5),
      ~greater=(-6),
      ~notEqual=(-7),
      ~gEqual=(-8),
      ~keep=(-1),
      ~zero=(-2),
      ~replace=(-3),
      ~incr=(-4),
      ~incrWrap=(-5),
      ~decr=(-6),
      ~decrWrap=(-7),
      ~invert=(-8),
      ~getCullFace=(-3),
      ~getDepthTest=(-4),
      ~getScissorTest=(-5),
      ~getStencilTest=(-6),
      ~unpackColorspaceConversionWebgl=(-1),
      ~pixelStorei=createEmptyStub(refJsObjToSandbox(sandbox^)),
      ~texImage2D=createEmptyStub(refJsObjToSandbox(sandbox^)),
      ~texParameteri=createEmptyStub(refJsObjToSandbox(sandbox^)),
      ~getParameter=createEmptyStub(refJsObjToSandbox(sandbox^)),
      ~createTexture=createEmptyStub(refJsObjToSandbox(sandbox^))
                     |> returns(99),
      ~activeTexture=createEmptyStub(refJsObjToSandbox(sandbox^)),
      ~bindTexture=createEmptyStub(refJsObjToSandbox(sandbox^)),
      ~generateMipmap=createEmptyStub(refJsObjToSandbox(sandbox^))
                      |> returns(100),
      ~shaderSource=createEmptyStub(refJsObjToSandbox(sandbox^)),
      ~enable=createEmptyStub(refJsObjToSandbox(sandbox^)),
      ~disable=createEmptyStub(refJsObjToSandbox(sandbox^)),
      ~cullFace=createEmptyStub(refJsObjToSandbox(sandbox^)),
      ~createProgram=createEmptyStub(refJsObjToSandbox(sandbox^))
                     |> returns(100),
      ~createShader=createEmptyStub(refJsObjToSandbox(sandbox^)),
      ~compileShader=createEmptyStub(refJsObjToSandbox(sandbox^)),
      ~getVertexAttribArrayEnabled=createEmptyStub(
                                     refJsObjToSandbox(sandbox^),
                                   ),
      ~linkProgram=createEmptyStub(refJsObjToSandbox(sandbox^)),
      ~getShaderParameter=createEmptyStub(refJsObjToSandbox(sandbox^)),
      ~getProgramParameter=createEmptyStub(refJsObjToSandbox(sandbox^))
                           |> returns(true),
      ~getShaderInfoLog=createEmptyStub(refJsObjToSandbox(sandbox^)),
      ~getProgramInfoLog=createEmptyStub(refJsObjToSandbox(sandbox^)),
      ~getShaderPrecisionFormat=createEmptyStub(refJsObjToSandbox(sandbox^))
                                |> returns({"precision": 1}),
      ~getExtension=createEmptyStub(refJsObjToSandbox(sandbox^))
                    |> returns(0),
      ~attachShader=createEmptyStub(refJsObjToSandbox(sandbox^)),
      ~bindAttribLocation=createEmptyStub(refJsObjToSandbox(sandbox^)),
      ~deleteShader=createEmptyStub(refJsObjToSandbox(sandbox^)),
      ~deleteBuffer=createEmptyStub(refJsObjToSandbox(sandbox^)),
      ~getAttribLocation=createEmptyStub(refJsObjToSandbox(sandbox^))
                         |> returns(0),
      ~getUniformLocation=createEmptyStub(refJsObjToSandbox(sandbox^))
                          |> returns(0),
      ~bindBuffer=createEmptyStub(refJsObjToSandbox(sandbox^)),
      ~resetBuffer=createEmptyStub(refJsObjToSandbox(sandbox^)),
      ~createBuffer=createEmptyStub(refJsObjToSandbox(sandbox^))
                    |> returns(0),
      ~bufferData=createEmptyStub(refJsObjToSandbox(sandbox^)),
      ~bufferSubData=createEmptyStub(refJsObjToSandbox(sandbox^)),
      ~vertexAttribPointer=createEmptyStub(refJsObjToSandbox(sandbox^)),
      ~enableVertexAttribArray=createEmptyStub(refJsObjToSandbox(sandbox^)),
      ~uniformMatrix3fv=createEmptyStub(refJsObjToSandbox(sandbox^)),
      ~uniformMatrix4fv=createEmptyStub(refJsObjToSandbox(sandbox^)),
      ~uniform1i=createEmptyStub(refJsObjToSandbox(sandbox^)),
      ~uniform1f=createEmptyStub(refJsObjToSandbox(sandbox^)),
      ~uniform3f=createEmptyStub(refJsObjToSandbox(sandbox^)),
      ~drawElements=createEmptyStub(refJsObjToSandbox(sandbox^)),
      ~drawArray=createEmptyStub(refJsObjToSandbox(sandbox^)),
      ~viewport=createEmptyStub(refJsObjToSandbox(sandbox^)),
      ~scissor=createEmptyStub(refJsObjToSandbox(sandbox^)),
      ~clearColor=createEmptyStub(refJsObjToSandbox(sandbox^)),
      ~clear=createEmptyStub(refJsObjToSandbox(sandbox^)),
      ~colorMask=createEmptyStub(refJsObjToSandbox(sandbox^)),
      ~stencilMask=createEmptyStub(refJsObjToSandbox(sandbox^)),
      ~stencilFunc=createEmptyStub(refJsObjToSandbox(sandbox^)),
      ~stencilOp=createEmptyStub(refJsObjToSandbox(sandbox^)),
      ~useProgram=createEmptyStub(refJsObjToSandbox(sandbox^)),
      ~disableVertexAttribArray=createEmptyStub(refJsObjToSandbox(sandbox^)),
      ~commit=createEmptyStub(refJsObjToSandbox(sandbox^)),
      ~isEnabled=createEmptyStub(refJsObjToSandbox(sandbox^)),
      ~blendFunc=createEmptyStub(refJsObjToSandbox(sandbox^)),
      (),
    ) => {
  "TEXTURE_WRAP_S": textureWrapS,
  "TEXTURE_WRAP_T": textureWrapT,
  "TEXTURE_MAG_FILTER": textureMagFilter,
  "TEXTURE_MIN_FILTER": textureMinFilter,
  "REPEAT": repeat,
  "MIRRORED_REPEAT": mirroredRepeat,
  "CLAMP_TO_EDGE": clampToEdge,
  "NEAREST": nearest,
  "NEAREST_MIPMAP_NEAREST": nearestMipmapNearest,
  "NEAREST_MIPMAP_LINEAR": nearestMipmapLinear,
  "LINEAR": linear,
  "LINEAR_MIPMAP_NEAREST": linearMipmapNearest,
  "LINEAR_MIPMAP_LINEAR": linearMipmapLinear,
  "RGB": rgb,
  "RGBA": rgba,
  "ALPHA": alpha,
  "LUMINANCE": luminance,
  "LUMINANCE_ALPHA": luminanceAlpha,
  "RGB_S3TC_DXT1": rgbS3tcDxt1,
  "RGBA_S3TC_DXT1": rgbaS3tcDxt1,
  "RGBA_S3TC_DXT3": rgbaS3tcDxt3,
  "RGBA_S3TC_DXT5": rgbaS3tcDxt5,
  "UNSIGNED_BYTE": unsignedByte,
  "UNSIGNED_SHORT_5_6_5": unsignedShort565,
  "UNSIGNED_SHORT_4_4_4_4": unsignedShort4444,
  "UNSIGNED_SHORT_5_5_5_1": unsignedShort5551,
  "UNPACK_FLIP_Y_WEBGL": unpackFlipYWebgl,
  "MAX_TEXTURE_IMAGE_UNITS": maxTextureImageUnits,
  "TEXTURE_2D": texture2D,
  "TEXTURE0": textureUnit0,
  "COMPILE_STATUS": compile_status,
  "LINK_STATUS": link_status,
  "VERTEX_SHADER": vertex_shader,
  "FRAGMENT_SHADER": fragment_shader,
  "ARRAY_BUFFER": array_buffer,
  "ELEMENT_ARRAY_BUFFER": element_array_buffer,
  "FLOAT": float,
  "STATIC_DRAW": static_draw,
  "DYNAMIC_DRAW": dynamic_draw,
  "POINTS": points,
  "LINES": lines,
  "TRIANGLES": triangles,
  "UNSIGNED_INT": unsigned_int,
  "UNSIGNED_SHORT": unsigned_short,
  "COLOR_BUFFER_BIT": color_buffer_bit,
  "DEPTH_BUFFER_BIT": depth_buffer_bit,
  "STENCIL_BUFFER_BIT": stencil_buffer_bit,
  "NONE": none,
  "UNPACK_COLORSPACE_CONVERSION_WEBGL": unpackColorspaceConversionWebgl,
  "pixelStorei": pixelStorei,
  "texImage2D": texImage2D,
  "texParameteri": texParameteri,
  "getParameter": getParameter,
  "createTexture": createTexture,
  "activeTexture": activeTexture,
  "bindTexture": bindTexture,
  "generateMipmap": generateMipmap,
  "VERTEX_ATTRIB_ARRAY_ENABLED": getVertexAttribArrayEnabled,
  "BACK": back,
  "FRONT": front,
  "FRONT_AND_BACK": frontAndBack,
  "ALWAYS": always,
  "NEVER": never,
  "LESS": less,
  "EQUAL": equal,
  "LEQUAL": lEqual,
  "GREATER": greater,
  "NOTEQUAL": notEqual,
  "GEQUAL": gEqual,
  "KEEP": keep,
  "ZERO": zero,
  "REPLACE": replace,
  "INCR": incr,
  "INCR_WRAP": incrWrap,
  "DECR": decr,
  "DECR_WRAP": decrWrap,
  "INVERT": invert,
  "DEPTH_TEST": getDepthTest,
  "SCISSOR_TEST": getScissorTest,
  "STENCIL_TEST": getStencilTest,
  "CULL_FACE": getCullFace,
  "cullFace": cullFace,
  "enable": enable,
  "disable": disable,
  "linkProgram": linkProgram,
  "getShaderParameter": getShaderParameter,
  "getProgramParameter": getProgramParameter,
  "getShaderInfoLog": getShaderInfoLog,
  "getProgramInfoLog": getProgramInfoLog,
  "getShaderPrecisionFormat": getShaderPrecisionFormat,
  "getExtension": getExtension,
  "attachShader": attachShader,
  "bindAttribLocation": bindAttribLocation,
  "deleteShader": deleteShader,
  "deleteBuffer": deleteBuffer,
  "getAttribLocation": getAttribLocation,
  "getUniformLocation": getUniformLocation,
  "bindBuffer": bindBuffer,
  "resetBuffer": resetBuffer,
  "createBuffer": createBuffer,
  "bufferData": bufferData,
  "bufferSubData": bufferSubData,
  "vertexAttribPointer": vertexAttribPointer,
  "enableVertexAttribArray": enableVertexAttribArray,
  "uniformMatrix3fv": uniformMatrix3fv,
  "uniformMatrix4fv": uniformMatrix4fv,
  "uniform1i": uniform1i,
  "uniform1f": uniform1f,
  "uniform3f": uniform3f,
  "drawElements": drawElements,
  "drawArray": drawArray,
  "viewport": viewport,
  "scissor": scissor,
  "clearColor": clearColor,
  "clear": clear,
  "colorMask": colorMask,
  "stencilMask": stencilMask,
  "stencilFunc": stencilFunc,
  "stencilOp": stencilOp,
  "useProgram": useProgram,
  "disableVertexAttribArray": disableVertexAttribArray,
  "shaderSource": shaderSource,
  "createProgram": createProgram,
  "createShader": createShader,
  "compileShader": compileShader,
  "commit": commit,
  "isEnabled": isEnabled,
  "blendFunc": blendFunc,
};

let setFakeGl = (fakeGlObj, state) =>
  FakeGlTool.setFakeGl(fakeGlObj, state) |> MainStateTool.setState;

let setFakeGlToRenderWorkerState =
    (fakeGlObj, state: StateDataRenderWorkerType.renderWorkerState) =>
  {
    ...state,
    deviceManagerRecord:
      state.deviceManagerRecord
      |> DeviceManagerService.setGl(Obj.magic(fakeGlObj)),
  }
  |> RenderWorkerStateTool.setState;
/*
 let setFakeGlToRenderWorkerState = (fakeGlObj, state) =>
   FakeGlTool.setFakeGl(fakeGlObj, state) |> RenderWorkerStateTool.setState; */