interface Contact {
  email: string;
  phNo: string;
}
interface Individual extends Contact {
  name: string;
}

class User implements Individual {
  constructor(public name: string, public email: string, public phNo: string) {}

  getInformation(this: User) {
    console.log(this);
  }
}

const user1 = new User("SD", "asd@asd.com", "3456789");
// const user1 = new User("SD");

user1.getInformation();
