"use strict";
function getMileageInfo(car) {
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
var nameInput = document.getElementById("name");
nameInput.value = "SD CREATION";
