class Car {
  constructor(public model: string, readonly brand: string) {}
  getDetails(this: Car) {
    console.log(this);
  }
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
}

const xuvCar = new Ecar("XUV", "Mahindra", 30);
xuvCar.getDetails();
xuvCar.setChargingTime = 40;
console.log(xuvCar.getChargingTime);
