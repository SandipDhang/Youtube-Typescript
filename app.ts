type TopSpeed = number | string | boolean | { speed: number };

type Car = {
  name: string;
  brand: string;
  model: "300" | "500" | "700";
  topSpeed: TopSpeed;
};

function logValue(value: any): void {
  console.log(value);
}

logValue("asd");

const car: Car = {
  name: "XUV",
  brand: "Mahindra",
  model: "500",
  topSpeed: { speed: 50 },
};

logValue(car);
