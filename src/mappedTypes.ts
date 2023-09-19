type User = {
  id: string;
  name: string;
  email: string;
  age: number;
};

type NewUserData = Pick<User, "name" | "email" | "age">;
type ConstantUser = Readonly<User>;
type PartialUser = Partial<User>;

let partialUser: PartialUser = {
  id: "sm7",
};

let user = {
  id: "hzh9",
  name: "Hamzah",
  email: "Hamzah@email.com",
  age: 17,
};

let newUserData: NewUserData = {
  name: "Yared",
  email: "yared3@email.com",
  age: 17,
};

let newUser: User = {
  ...newUserData,
  id: "yrd3",
};
