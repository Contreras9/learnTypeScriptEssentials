class Queue<T> {
  private items: T[];

  constructor(startingValue: T) {
    this.items = [startingValue];
  }

  add(newItem: T) {
    this.items.push(newItem);
  }

  remove(): T | undefined {
    return this.items.shift();
  }
}

let stringQueue = new Queue("Salam");
stringQueue.add("Hello");
console.log(`The first element in the que is: ${stringQueue.remove()}`);

let numberQueue = new Queue(3);
numberQueue.add(9);

function print<T>(value: T) {
  console.log(`The value is: ${value}`);
}
