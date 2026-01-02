import init, { World } from './wasm/pkg/game_core.js';

const CELL_SIZE = 20;

function drawWorld(ctx: CanvasRenderingContext2D, size: number): void {
  ctx.beginPath();

  for (let col = 0;  col < size + 1; col++) {
    ctx.moveTo(col * CELL_SIZE, 0);
    ctx.lineTo(col * CELL_SIZE, size * CELL_SIZE);
  }

  for (let row = 0; row < size + 1; row++) {
    ctx.moveTo(0, row * CELL_SIZE);
    ctx.lineTo(size * CELL_SIZE, row * CELL_SIZE);
  }

  ctx.stroke();
}

async function main(): Promise<void> {
  void await init();

  const canvas = document.getElementById('snake-game-canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d');
  if (ctx === null) {
    throw new Error('Failed to get 2D context');
  }

  const world = World.new();
  const size = world.size();

  canvas.height = size * CELL_SIZE;
  canvas.width = size * CELL_SIZE;

  drawWorld(ctx, size);
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
