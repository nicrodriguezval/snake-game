async function main(): Promise<void> {
  const importObject = {
    console: {
      log: () => {
        console.log('Hello from WebAssembly!');
      },
      error: () => {
        console.error('An error occurred in WebAssembly!');
      },
    },
  };

  const { instance } = await WebAssembly.instantiateStreaming(fetch('/test.wasm'), importObject);

  const mem = instance.exports.mem as WebAssembly.Memory;
  const uint8Array = new Uint8Array(mem.buffer, 0, 100);
  const text = new TextDecoder('utf-8').decode(uint8Array);
  debugger
  console.log(text);

  const sum = instance.exports.sum as CallableFunction;
  const result = sum(100, 300);
  debugger
  console.log(result);
}

main();
