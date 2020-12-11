export {};

namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }

  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const meTokyo = new Japanese.Tokyo.Person("Kagami");
const meOsaka = new Japanese.Tokyo.Person("かがやん");

const michael = new English.Person("Michael", "Joseph", "Jackson");

console.log(meTokyo);
console.log(meOsaka);
console.log(michael);
