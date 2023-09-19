"use strict";
class Queue {
    constructor(startingValue) {
        this.items = [startingValue];
    }
    add(newItem) {
        this.items.push(newItem);
    }
    remove() {
        return this.items.shift();
    }
}
let stringQueue = new Queue("Salam");
stringQueue.add("Hello");
console.log(`The first element in the que is: ${stringQueue.remove()}`);
let numberQueue = new Queue(3);
numberQueue.add(9);
function print(value) {
    console.log(`The value is: ${value}`);
}
