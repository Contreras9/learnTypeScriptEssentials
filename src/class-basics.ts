interface NameObject {
  name: string;
  getName(): string;
}

let dog: NameObject = {
  name: "Spot",
  getName() {
    return this.name;
  },
};

dog.name;

class Human {
  private name: string;
  private age: number;
  private hairColor: string;

  constructor(name: string, age: number, hairColor: string) {
    this.name = name;
    this.age = age;
    this.hairColor = hairColor;
  }

  public getIntroduction(): string {
    return `Hello, my name is ${this.name}`;
  }

  public getIntroduceYourselfTo(name: string): string {
    return `Hello, ${name}, my name is ${this.name}`;
  }
}

let human = new Human("Yared", 17, "brown");

console.log(human.getIntroduction());

console.log(human.getIntroduceYourselfTo("Hamzah"));
