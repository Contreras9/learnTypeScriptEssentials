import { add } from "./util";

console.log(`The sum of 1 and 2 is ${add(1, 2)}`);

let num1: number = 9;
let pi: number = 3.1415;

let intro: string = "Hello";

let isConnected: boolean = true;

let person: object = {
  name: "Yared",
  hairColor: "brown",
};

let digits: Array<number> = [3, 6, 9];

let personTuple: [string, number, boolean] = ["Yared", 9, true];

let something: any = "Hey!";
something = 18;
something = true;

let data: any[] = ["Hey", 3, true, []];

let nothing: undefined = undefined;
let anotherNothing: null = null;
