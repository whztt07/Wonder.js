open StateDataMainType;

open GlType;

open Gl;

open Js.Typed_array;

open VboBufferType;

let createBuffer =
  [@bs]
  (
    (gl, record: Uint16Array.t, state: StateDataMainType.state) => {
      let buffer = PoolVboBufferService.getElementArrayBuffer(gl, state.vboBufferRecord);
      bindBuffer(getElementArrayBuffer(gl), buffer, gl);
      bufferUint16Data(getElementArrayBuffer(gl), record, getStaticDraw(gl), gl);
      resetBuffer(getElementArrayBuffer(gl), Js.Nullable.null, gl);
      buffer
    }
  );

let getOrCreateBuffer =
    (
      gl,
      (geometryIndex, bufferMap),
      getDataFunc,
      state: StateDataMainType.state
    ) =>
  GetVboBufferMainService.getOrCreateBuffer(
    gl,
    (geometryIndex, bufferMap),
    (createBuffer, getDataFunc),
    state
  );