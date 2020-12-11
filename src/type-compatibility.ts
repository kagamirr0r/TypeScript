export {};

let fooCompatible: any;
let barCompatible: string = "TypeScript";

console.log(typeof fooCompatible);
console.log(typeof barCompatible);
fooCompatible = barCompatible;

let fooIncompatible: string;
let barIncompatible: number = 1;

// fooIncompatible = barIncompatible; error

let fooString: string;
let barString: string = "string";

fooString = barString;

let fooStringLiteral: "fooStringLiteral" = "fooStringLiteral";
fooString = fooStringLiteral; //リテラル型はプリミティブ型の一部

let fooNumber: number;
let fooNumberLiteral: 1993 = 1993;

fooNumber = fooNumberLiteral;

interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string) {}
}

let me: Animal;

me = new Person(27, "kagami");
console.log(typeof Person);
console.log(me);
