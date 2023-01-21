function MyDecorator(msg: string) {
  return function (classCons: Function) {
    console.log(msg, classCons);
  };
}

@MyDecorator("USER Class is creating")
class User {
  name: string;
  email: string;

  constructor(n: string, e: string) {
    this.name = n;
    this.email = e;
  }

  getDetails(this: User) {
    console.log(this);
  }
}

// const user = new User("SD", "sd@creations.com");

// console.log(user);
