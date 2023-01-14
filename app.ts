abstract class Car {
  static mfgYear = 2023;
  static log(value: string) {
    console.log(value);
  }
  constructor(public model: string, readonly brand: string) {}
  getDetails(this: Car) {
    console.log(this);
  }

  abstract buildCar(): void;
}
class Ecar extends Car {
  private chargingTime: number;
  constructor(mdl: string, brand: string, chrgTym: number) {
    super(mdl, brand);
    this.chargingTime = chrgTym;
  }

  get getChargingTime() {
    return this.chargingTime;
  }

  set setChargingTime(time: number) {
    this.chargingTime = time;
  }

  getDetails(this: Car) {
    console.log("This is from SUBCLASS Ecar", this);
  }

  buildCar() {
    console.log("Building an Electric car");
  }
}

const xuvCar = new Ecar("XUV", "Mahindra", 30);
xuvCar.getDetails();
xuvCar.buildCar();
xuvCar.setChargingTime = 40;
console.log(Car.mfgYear);

Car.log("ANYVALUE");
