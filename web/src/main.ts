import init, { World } from './wasm/pkg/game_core.js';

const CELL_SIZE = 20;

function drawWorld(ctx: CanvasRenderingContext2D, world: World): void {
  ctx.beginPath();

  for (let col = 0;  col < world.size + 1; col++) {
    ctx.moveTo(col * CELL_SIZE, 0);
    ctx.lineTo(col * CELL_SIZE, world.size * CELL_SIZE);
  }

  for (let row = 0; row < world.size + 1; row++) {
    ctx.moveTo(0, row * CELL_SIZE);
    ctx.lineTo(world.size * CELL_SIZE, row * CELL_SIZE);
  }

  ctx.stroke();
}

async function main(): Promise<void> {
  void await init();

  const world = World.new(8);

  const canvas = document.getElementById('snake-game-canvas') as HTMLCanvasElement;
  const ctx = canvas.getContext('2d');
  if (ctx === null) {
    throw new Error('Failed to get 2D context');
  }

  canvas.height = world.size * CELL_SIZE;
  canvas.width = world.size * CELL_SIZE;

  drawWorld(ctx, world);
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
