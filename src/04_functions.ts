// function

function addNum(x: number, y: number): number {
  return x + y;
}

console.log(addNum(1,2));

// The type void can be used to indicate a function doesn't return any value.
function printHello(): void {
  console.log("Hello!");
}

printHello()