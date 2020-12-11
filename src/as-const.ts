export {};

let name = "Atsushi";

name = "Ham";

let nickname = "Ham" as const;

const nicknamae = "Ham";
nickname = "Hamtaro"; //error

let profile = {
  name: "Atsushi",
  height: 178,
} as const;

profile.name = "Unti"; //error
profile.height = 180; //error

const profairu: {
  readonly name: string;
  readonly height: number;
} = {
  name: "ore",
  height: 165,
};
