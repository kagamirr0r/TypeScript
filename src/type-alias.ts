export {};

type Mojiretsu = string;

const moji: Mojiretsu = 'oredayo';

console.log(moji);


type Example = {
  name: Mojiretsu;
  age: number;
}

const example: Example = {
  name: 'kagami',
  age: 27
};

type Profile2 = typeof example;