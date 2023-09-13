let greeting: string = "Hello from TypeScript!";
console.log(greeting);

function double(x: number): number {
  return x * 3;
}

function sayHello(): void {
  console.log("Hello!");
}

// const triple = (x: number) => x * 3;

// let x: number;

// x = 100;

let triple: (x: number) => number;

triple = (x: number) => x * 3;

let names: string[] = [];
names.push("Hamzah");

let numbers: number[] = [3, 6, 9];
