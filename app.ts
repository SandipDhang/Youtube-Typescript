class Car {
  model: string;
  brand: string = "Mahindra";

  constructor(mdl: string) {
    this.model = mdl;
  }

  getDetails(this: Car) {
    console.log({ model: this.model });
  }
}

const xuvCar = new Car("XUV");

const xuvCarCopy = {
  model: "asd",
  brand: "dsa",
  getDetails: xuvCar.getDetails,
};

xuvCarCopy.getDetails();
