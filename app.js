"use strict";
var Car = /** @class */ (function () {
    // model: string;
    // readonly brand: string = "Mahindra";
    // private colorVariant: string[] = [];
    function Car(model, brand, colorVariant) {
        this.model = model;
        this.brand = brand;
        this.colorVariant = colorVariant;
        // this.model = mdl;
        // this.brand = brand;
        // this.colorVariant = colorVariant;
    }
    Car.prototype.getDetails = function () {
        console.log(this);
    };
    Car.prototype.addColorVariant = function (value) {
        this.colorVariant.push(value);
    };
    return Car;
}());
var xuvCar = new Car("XUV", "Mahindra", ["black"]);
// xuvCar.addColorVariant("black");
xuvCar.addColorVariant("white");
// xuvCar.colorVariant[2] = "red";
// xuvCar.brand = "TATA";
console.log(xuvCar);
