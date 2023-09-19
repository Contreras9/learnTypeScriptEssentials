"use strict";
let dog = {
    name: "Spot",
    getName() {
        return this.name;
    },
};
dog.name;
class Human {
    constructor(name, age, hairColor) {
        this.name = name;
        this.age = age;
        this.hairColor = hairColor;
    }
    getIntroduction() {
        return `Hello, my name is ${this.name}`;
    }
    getIntroduceYourselfTo(name) {
        return `Hello, ${name}, my name is ${this.name}`;
    }
}
let human = new Human("Yared", 17, "brown");
console.log(human.getIntroduction());
console.log(human.getIntroduceYourselfTo("Hamzah"));
