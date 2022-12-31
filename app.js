// Number = 1 2 3 4 673 78.577
// string = 'SD Creation' `asdasd`
function getTotal(val1, val2) {
    return val1 + val2;
}
function greet(prefix, name, clg) {
    console.log(typeof prefix);
    if (clg) {
        console.log("".concat(prefix, " ").concat(name));
    }
    else {
        return "".concat(prefix, " ").concat(name);
    }
}
console.log(greet("Hello from ", "SD Creations", false));
