type Person = { name: string; hairColor?: string; age?: number };

type HairColor = string | undefined;

let person: Person = {
  name: "Yared",
  hairColor: "brown",
  age: 17,
};

let person2: Person = {
  name: "Mosab",
};

// let yaridHairColor: string = person.hairColor || "Bald";
let yaridHairColor: HairColor = person.hairColor;
