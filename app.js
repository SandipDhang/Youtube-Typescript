"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(model, brand) {
        this.model = model;
        this.brand = brand;
    }
    Car.prototype.getDetails = function () {
        console.log(this);
    };
    return Car;
}());
var Ecar = /** @class */ (function (_super) {
    __extends(Ecar, _super);
    function Ecar(mdl, brand, chrgTym) {
        var _this = _super.call(this, mdl, brand) || this;
        _this.chargingTime = chrgTym;
        _this.model = "sad";
        return _this;
    }
    return Ecar;
}(Car));
var xuvCar = new Ecar("XUV", "Mahindra", 30);
// xuvCar.model = "sad";
xuvCar.getDetails();
