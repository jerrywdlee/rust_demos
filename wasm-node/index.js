
const wasm = require("./pkg");

let result = wasm.add(10, 4);
console.log(result);

(async () => {
  const res = await wasm.async_add(40, 2);
  console.log(res);
})()
