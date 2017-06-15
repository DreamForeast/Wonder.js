var stateTool = (function () {
    return {
        createAndSetFakeGLState: function (sandbox) {
            var state = this.createFakeGLState(sandbox);

            this.setState(state);

            return state;
        },
        createFakeGLState: function (sandbox) {
            var state = wd.createState();
            var gl = glslTool.buildFakeGl(sandbox);

            // return state.setIn(["DeviceManager", "gl"], gl);
            wd.DeviceManagerData.gl = gl;

            return state;
        },
        getGLFromFakeGLState: stateToolCommon.getGLFromFakeGLState,
        setState: stateToolCommon.setState
    }
})()

