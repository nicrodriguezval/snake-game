use wasm_bindgen::prelude::*;
use wee_alloc::WeeAlloc;

#[global_allocator]
static ALLOC: WeeAlloc = WeeAlloc::INIT;

pub struct Cell(usize);

struct Snake {
    pub body: Vec<Cell>,
}

impl Snake {
    pub fn new(spawn_index: usize) -> Self {
        Self {
            body: vec![Cell(spawn_index)],
        }
    }
}

#[wasm_bindgen]
pub struct World {
    size: usize,
    snake: Snake,
}

#[wasm_bindgen]
impl World {
    pub fn new() -> Self {
        Self {
            size: 8,
            snake: Snake::new(10),
        }
    }

    pub fn width(&self) -> usize {
        self.size
    }

    pub fn snake_head_index(&self) -> usize {
        self.snake.body[0].0
    }
}
