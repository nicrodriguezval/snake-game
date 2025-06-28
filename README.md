# Snake Game (Rust/WASM + TypeScript)

This project implements the classic Snake game as a project from the course [Rust & WebAssembly with JS (TS) - The Practical Guide](https://udemy.com/course/rust-webassembly-with-js-ts-the-practical-guide/), showcasing the power of WebAssembly (WASM) by running the core game logic written in Rust directly within a web browser. The project is divided into two main parts:

1.  **Rust Game Logic (Core)**: This part contains the game's fundamental mechanics, such as snake movement, collision detection, food generation, and scorekeeping, all implemented in Rust.
    
2.  **TypeScript Web Interface (Frontend)**: This part provides the graphical user interface (GUI) for the game, handling user input, rendering the game state (received from the Rust core), and managing the overall web application.
    

## Project Structure

The project is structured to clearly separate the Rust/WASM module from the TypeScript frontend application.

```
.
├── game-core/     # Rust project containing the game logic
│   ├── src/
│   │   └── lib.rs      # Rust game logic, compiled to WASM
│   ├── Cargo.toml      # Rust project manifest
│   └── ...
├── web/    # TypeScript project containing the web interface
│   ├── src/
│   │   ├── index.ts    # Main TypeScript entry point
│   │   ├── style.css   # Styles for the game
│   │   └── index.html  # HTML template
│   ├── package.json    # Node.js project manifest
│   ├── tsconfig.json   # TypeScript configuration
│   └── ...
└── README.md           # This README file
```

## Technologies Used

-   **Rust**: For high-performance, memory-safe game logic.
    
-   **WebAssembly (WASM)**: To compile Rust code into a binary format that runs efficiently in web browsers.
    
-   **`wasm-bindgen`**: A Rust tool for facilitating high-level interactions between WASM modules and JavaScript.
    
-   **TypeScript**: For building a robust and type-safe web frontend.
    
-   **HTML/CSS**: For the basic structure and styling of the web page.
    
-   **Webpack (or similar bundler)**: To bundle the TypeScript and WASM assets for deployment (assumed for a typical TypeScript project).
    

## How it Works

1.  **Rust Compilation to WASM**: The Rust code in `game-core` is compiled into a `.wasm` file and a corresponding JavaScript glue code file using `wasm-pack` (which leverages `wasm-bindgen`). This glue code makes it easy to import and use the Rust functions from JavaScript/TypeScript.
    
2.  **TypeScript Integration**: The `ts-web-frontend` project imports the generated WASM module. TypeScript functions then call the Rust functions (exposed via `wasm-bindgen`) to update the game state.
    
3.  **Game Loop**: The TypeScript frontend maintains the game loop, requesting updates from the Rust core at regular intervals and then rendering the new game state onto an HTML `<canvas>` or similar element.
    
4.  **User Input**: User inputs (e.g., arrow keys for snake direction) are captured by the TypeScript frontend and passed as calls to the Rust WASM module to influence the game logic.
    

## Setup and Running

To get this project up and running on your local machine, follow these steps:

### Prerequisites

-   **Rust**: Install Rust and Cargo using `rustup`: [https://rustup.rs/](https://rustup.rs/ "null")
    
-   **`wasm-pack`**: Install the `wasm-pack` tool:
    
    ```
    cargo install wasm-pack
    ```
    
-   **Node.js and npm/yarn**: Install Node.js (which includes npm) or Yarn: [https://nodejs.org/](https://nodejs.org/ "null")
    

### Installation Steps

1.  **Clone the Repository**:
    
    ```
    git clone <your-repository-url>
    cd snake-game-project
    ```
    
2.  **Build the Rust WASM Module**: Navigate into the `game-core` directory and build the WASM package. This will generate the `.wasm` file and JavaScript bindings in a `pkg` directory.
    
    ```
    cd game-core
    wasm-pack build --target web # or --target bundler if using a bundler like webpack
    cd ..
    
    
    ```
    
    _Note: If you're using a bundler like Webpack in your TypeScript project, `--target bundler` might be more appropriate, allowing your bundler to handle the WASM module import._
    
3.  **Install TypeScript Frontend Dependencies**: Navigate into the `ts-web-frontend` directory and install its dependencies.
    
    ```
    cd ts-web-frontend
    npm install # or yarn install
    cd ..
    
    
    ```
    
4.  **Run the TypeScript Frontend**: After installing dependencies, you can start the development server for the frontend.
    
    ```
    cd ts-web-frontend
    npm start # or yarn start (or whatever script starts your dev server, e.g., 'npm run dev')
    
    
    ```
    
    This will typically open the game in your web browser at a local address (e.g., `http://localhost:8080`).
    

## Development

### Rust Core (`game-core`)

-   Modify the game logic in `game-core/src/lib.rs`.
    
-   After making changes, rebuild the WASM module: `cd game-core && wasm-pack build --target web && cd ..`
    
-   If your frontend is running, it might automatically reload, or you may need to manually refresh your browser.
    

### TypeScript Frontend (`ts-web-frontend`)

-   Modify the rendering, UI, or input handling in `ts-web-frontend/src/`.
    
-   Your development server should typically provide live reloading for these changes.
