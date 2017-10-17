external trace : 'a => unit = "trace" [@@bs.val] [@@bs.scope "console"];

external anyToJsJsonT : 'a => Js.Json.t = "%identity";

let trace param => {
  trace (Js.Json.stringify (anyToJsJsonT param)) |> ignore;
  param
};

let log param => {
  Js.log (Js.Json.stringify (anyToJsJsonT param)) |> ignore;
  param
};