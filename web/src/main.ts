import init, { World } from './wasm/pkg/game_core.js';

async function main(): Promise<void> {
  void await init();
  const world = World.new(8);
  const canvas = document.getElementById('snake-game-canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d');
}

await main();

// async function main(): Promise<void> {
//   const memory = new WebAssembly.Memory({ initial: 1, maximum: 10 });
//
//   const importObject = {
//     env: {
//       mem: memory,
//     },
//     console: {
//       log: () => {
//         console.log('Hello from TS!');
//       },
//       error: () => {
//         console.error('Error from TS!');
//       },
//     },
//   };
//
//   const { instance } = await WebAssembly.instantiateStreaming(
//     fetch('/example.wasm'),
//     importObject
//   );
//
//   const uint8Array = new Uint8Array(memory.buffer, 0, 23);
//   const text = new TextDecoder('utf-8').decode(uint8Array);
//   console.log(text);
//
//   const sum = instance.exports.sum as CallableFunction;
//   const result = sum(100, 300);
//   console.log(result);
// }
//
// main();
