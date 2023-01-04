function getTotal(val1: any, val2: any) {
  return val1 + val2;
}

const car: {
  name: string;
  brand: string;
  model: "300" | "500" | "700";
  topSpeed: number | string | boolean | { speed: number };
} = {
  name: "XUV",
  brand: "Mahindra",
  model: "500",
  topSpeed: { speed: 50 },
};

console.log(car.topSpeed);
