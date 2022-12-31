// Number = 1 2 3 4 673 78.577
// string = 'SD Creation' `asdasd`

function getTotal(val1: number, val2: number) {
  return val1 + val2;
}

function greet(prefix: string, name: string, clg: boolean) {
  if (clg) {
    console.log(`${prefix} ${name}`);
  } else {
    return `${prefix} ${name}`;
  }
}

console.log(greet("Hello from ", "SD Creations", false));
