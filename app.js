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
    Car.log = function (value) {
        console.log(value);
    };
    Car.prototype.getDetails = function () {
        console.log(this);
    };
    Car.mfgYear = 2023;
    return Car;
}());
var Ecar = /** @class */ (function (_super) {
    __extends(Ecar, _super);
    function Ecar(mdl, brand, chrgTym) {
        var _this = _super.call(this, mdl, brand) || this;
        _this.chargingTime = chrgTym;
        return _this;
    }
    Object.defineProperty(Ecar.prototype, "getChargingTime", {
        get: function () {
            return this.chargingTime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ecar.prototype, "setChargingTime", {
        set: function (time) {
            this.chargingTime = time;
        },
        enumerable: false,
        configurable: true
    });
    Ecar.prototype.getDetails = function () {
        console.log("This is from SUBCLASS Ecar", this);
    };
    Ecar.prototype.buildCar = function () {
        console.log("Building an Electric car");
    };
    return Ecar;
}(Car));
var xuvCar = new Ecar("XUV", "Mahindra", 30);
xuvCar.getDetails();
xuvCar.buildCar();
xuvCar.setChargingTime = 40;
console.log(Car.mfgYear);
Car.log("ANYVALUE");
