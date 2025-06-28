async function main(): Promise<void> {
  const importObject = {
    console: {
      log: () => {
        console.log("Hello from WebAssembly!");
      },
      error: () => {
        console.error("An error occurred in WebAssembly!");
      }
    }
  }

  const response = await fetch("/sum.wasm");
  const buffer = await response.arrayBuffer();
  const wasm = await WebAssembly.instantiate(buffer, importObject);

  const sum = wasm.instance.exports.sum as CallableFunction;
  debugger
  const result = sum(100, 300);
  console.log(result);
}

main();
