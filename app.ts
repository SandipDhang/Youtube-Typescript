class Car {
  constructor(protected model: string, readonly brand: string) {}

  getDetails(this: Car) {
    console.log(this);
  }
}

class Ecar extends Car {
  private chargingTime: number;
  constructor(mdl: string, brand: string, chrgTym: number) {
    super(mdl, brand);
    this.chargingTime = chrgTym;
    this.model = "sad";
  }
  // getDetails(this: Car) {
  //   console.log("This is from subclass");
  // }
}

const xuvCar = new Ecar("XUV", "Mahindra", 30);

// xuvCar.model = "sad";
xuvCar.getDetails();
