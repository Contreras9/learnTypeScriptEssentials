let person3 = {
  name: "Yared",
  age: 17,
  hairColor: "brown",
};

type Person3 = typeof person3;

let x = 5;

type TypeOfX = typeof x;

type Person3Key = keyof Person3;

function getPropertyFromPerson3(person: Person3, key: Person3Key) {
  return person[key];
}
