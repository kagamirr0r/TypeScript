export {};

interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = { name: "kagami", underTwenty: false };
// { [ index : typeForIndex ]: typeForValue}
profile.name = "Ham";
profile.age = 27;
profile.nationality = "japan";
