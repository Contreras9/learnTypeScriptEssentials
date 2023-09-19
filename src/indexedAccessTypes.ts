interface Car {
  make: string;
  model?: string | number;
  numberOfMiles: number;
}

let car: Car = {
  make: "Chevrolet",
  model: "Camero",
  numberOfMiles: 10000,
};

type CarName = Car["model"] | Car["make"];

let carName: CarName = car.model || car.make;
