mod utils;

use wasm_bindgen::prelude::*;
use wasm_bindgen_futures::{JsFuture, future_to_promise};

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    alert("Hello, wasm-node!");
}

#[wasm_bindgen]
pub fn add(a: i32, b: i32) -> i32 {
   return a + b;
}

#[wasm_bindgen]
pub async fn async_add(a: i32, b:i32) -> Result<i32, JsValue> {
    let res = a + b;

    Ok(res)
}
