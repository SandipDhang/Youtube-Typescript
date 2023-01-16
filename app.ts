type Contact = {
  email: string;
  phNo: string;
};
type Individual = {
  name: string;
};

type User = Individual & Contact;
type NewUser = Individual | undefined;

type AnotherType = User & NewUser;

const anyObj: AnotherType = { name: "asd", email: "asdasd", phNo: "asdasd" };

const user1: User = {
  name: "SD",
  email: "asd@asd.com",
  phNo: "34567856789",
};

// class User implements Individual {
//   constructor(
//     public name: string,
//     public email?: string,
//     public phNo?: string
//   ) {}

//   getInformation(this: User) {
//     if (this.email) {
//       console.log(this.email.toLocaleLowerCase());
//     }
//   }
// }

// const user1 = new User("SD");
// const user1 = new User("SD");

// user1.getInformation();
