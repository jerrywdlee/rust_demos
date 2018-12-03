/*
* See http://nmi.jp/2018-03-19-WebAssembly-with-Rust
* may need run
* $ rustup update
* $ rustup target add wasm32-unknown-unknown
*/

#[no_mangle]
pub extern "C" fn hoge(v: f64) -> f64 {
    v + 2.0
}

#[no_mangle]
pub extern "C" fn forLoop(n: f64) -> f64 {
    let mut x = 0u64;
    let max = 10u64.pow(n as u32);
    for i in 0..max {
        x = i
    }
    x as f64
}
