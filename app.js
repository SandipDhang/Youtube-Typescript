"use strict";
var User = /** @class */ (function () {
    function User(name, email, phNo) {
        this.name = name;
        this.email = email;
        this.phNo = phNo;
    }
    User.prototype.getInformation = function () {
        console.log(this);
    };
    return User;
}());
var user1 = new User("SD", "asd@asd.com", "3456789");
// const user1 = new User("SD");
user1.getInformation();
