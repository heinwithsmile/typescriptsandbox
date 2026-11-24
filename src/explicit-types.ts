// Explicit Types
let person: string;
person = "Hein";
// person=true;

let num: number;
num = 10;
// num = "10"

let bool: boolean;
bool = true;
bool = false;
// bool = "true"

// array
let workers: string[];
// workers = ["hein",10,true]

let nums: number[];
nums = [1, 2, 3, 4];

let bools: boolean[];
bools = [true, false];

// union type
let mixed: (boolean | string)[];
mixed = [true, "hein", false, "abcd"];

// object
let personOne: {
  name: string;
  age: number;
  passed: boolean;
};

personOne = {
  name: "hein",
  age: 20,
  passed: true,
};
