'use strict';

let WASM = null;

const loadWasm = async url => {
  const wasmRaw = await fetch(url).then(res => res.arrayBuffer());
  const wasmObj = await WebAssembly.instantiate(wasmRaw, {});
  return wasmObj.instance.exports;
}

loadWasm('wasm_demo.wasm').then(wasm => {
  console.log(wasm);
  WASM = wasm;
  console.log(wasm.hoge(10));
})

const fibJs = async n => {
  const startTime = Date.now();
  let [curr, next] = [0, 1];
  for (let i = n; i > 0; i--) {
    [curr, next] = [next, curr + next]
  }
  const cost = Date.now() - startTime;
  return { ans: curr, cost, n };
}

const forLoopJs = async n => {
  const startTime = Date.now();
  let x = 0;
  for (let i = 0; i < n; i++) {
    x = i
  }
  const cost = Date.now() - startTime;
  return { res:x, cost, n };
}

const forLoopWasm = async (n, wasm) => {
  const startTime = Date.now();
  const res = await wasm.forLoop(n);
  const cost = Date.now() - startTime;
  return { res, cost, n };
}

function runForLoopJs() {
  const n = parseInt(document.querySelector('#forLen').value);
  forLoopJs(Math.pow(10, n)).then(ans => {
    console.log(ans);
    document.querySelector('#forAnsJs').innerText = `10^${n} / ${ans.cost}ms`;
  });
}

function runForLoopWasm() {
  const n = parseInt(document.querySelector('#forLen').value);
  forLoopWasm(n, WASM).then(ans => {
    console.log(ans);
    document.querySelector('#forAnsWasm').innerText = `10^${n} / ${ans.cost}ms`;
  });
}