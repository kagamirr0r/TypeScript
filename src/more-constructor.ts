export {};

class Person {
  constructor(public name: string, private age: number) {}
}

const kagami = new Person("kagami", 27);

console.log(kagami);
