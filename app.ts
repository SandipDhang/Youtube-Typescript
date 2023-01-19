type User = {
  _id: string;
  name: string;
  age: number;
};

const userArr: Array<User> = [
  {
    _id: "123",
    name: "SD",
    age: 30,
  },
  {
    _id: "124",
    name: "DS",
    age: 20,
  },
];

const response: Promise<User[]> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(userArr);
  }, 3000);
});

response.then((data) => console.log(data[1].age));
