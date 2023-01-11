class Car {
  // model: string;
  // readonly brand: string = "Mahindra";
  // private colorVariant: string[] = [];

  constructor(
    public model: string,
    readonly brand: string,
    private colorVariant: string[]
  ) {
    // this.model = mdl;
    // this.brand = brand;
    // this.colorVariant = colorVariant;
  }

  getDetails(this: Car) {
    console.log(this);
  }

  addColorVariant(value: string) {
    this.colorVariant.push(value);
  }
}

const xuvCar = new Car("XUV", "Mahindra", ["black"]);
// xuvCar.addColorVariant("black");
xuvCar.addColorVariant("white");

// xuvCar.colorVariant[2] = "red";

// xuvCar.brand = "TATA";

console.log(xuvCar);
