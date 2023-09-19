"use strict";
let partialUser = {
    id: "sm7",
};
let user = {
    id: "hzh9",
    name: "Hamzah",
    email: "Hamzah@email.com",
    age: 17,
};
let newUserData = {
    name: "Yared",
    email: "yared3@email.com",
    age: 17,
};
let newUser = Object.assign(Object.assign({}, newUserData), { id: "yrd3" });
