// FUNCTION OVERLOADS

function combineValues(val1: string, val2: string): string;
function combineValues(val1: number, val2: number): number;
function combineValues(val1: string, val2: number): string;
function combineValues(val1: string, val2: string): string;
function combineValues(val1: string | number, val2: string | number) {
  if (typeof val1 === "string" || typeof val2 === "string") {
    return val1.toString() + val2.toString();
  }
  return val1 + val2;
}

const myValue = combineValues(10, 20);

console.log(myValue);
