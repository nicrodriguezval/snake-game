(module
  ;; Import the console functions for logging and error handling
  (import "console" "log" (func $log))
  (import "console" "error" (func $error))
  ;; Define a imported memory of 1 page (64KB) and initialize it with a string
  (memory (import "env" "mem") 1)
  (data (i32.const 0) "Hello from WebAssembly!")
  ;; Define a function `sum` that takes two i32 parameters and returns their sum
  (func $sum (param $a i32) (param $b i32) (result i32)
    call $log
    call $error
    local.get $a
    local.get $b
    i32.add
  )
  ;; Export the the `sum` function
  (export "sum" (func $sum))
)
