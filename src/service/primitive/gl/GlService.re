let getContext = (canvas, contextConfigJsObj) => WonderWebgl.Gl.getWebgl1Context(canvas, contextConfigJsObj);

let createGl = (contextConfig: ContextType.contextConfigJsObj, canvas) =>
  getContext(canvas, contextConfig);