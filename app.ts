enum Variant {
  SEVEN = 700,
  FIVE = 500,
  THREE = 300,
}

const car: {
  brand: string;
  model: string;
  variant: Variant;
} = {
  brand: "Mahindra",
  model: "XUV",
  variant: Variant.SEVEN,
};

if (car.variant === Variant.SEVEN) {
  console.log(car.variant);
}

console.log(car.variant);
