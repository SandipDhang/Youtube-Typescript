var Variant;
(function (Variant) {
    Variant[Variant["SEVEN"] = 700] = "SEVEN";
    Variant[Variant["FIVE"] = 500] = "FIVE";
    Variant[Variant["THREE"] = 300] = "THREE";
})(Variant || (Variant = {}));
var car = {
    brand: "Mahindra",
    model: "XUV",
    variant: Variant.SEVEN
};
if (car.variant === Variant.SEVEN) {
    console.log(car.variant);
}
console.log(car.variant);
