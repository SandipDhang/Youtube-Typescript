"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function MyDecorator(msg) {
    return function (classCons) {
        console.log(msg, classCons);
    };
}
let User = class User {
    constructor(n, e) {
        this.name = n;
        this.email = e;
    }
    getDetails() {
        console.log(this);
    }
};
User = __decorate([
    MyDecorator("USER Class is creating")
], User);
// const user = new User("SD", "sd@creations.com");
// console.log(user);
