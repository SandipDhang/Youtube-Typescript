interface EV {
  type: "EV";
  kmpu: number;
}
interface NonEV {
  type: "NonEV";
  kmpl: number;
}

type Car = EV | NonEV;

function getMileageInfo(car: Car) {
  switch (car.type) {
    case "EV":
      console.log(car.kmpu);
      break;
    case "NonEV":
      console.log(car.kmpl);
  }
}

getMileageInfo({ type: "NonEV", kmpl: 15 });

// TYPE CASTING
// const nameInput = <HTMLInputElement>document.getElementById("name")!;
const nameInput = document.getElementById("name")! as HTMLInputElement;

(nameInput as HTMLInputElement).value = "SD CREATION";
