const user = {
  id: 1,
  name: 'John',
  age: 25,
};

localStorage.setItem(user.id, JSON.stringify(user));
let userFromLocalStorage = JSON.parse(localStorage.getItem(user.id));
console.log(userFromLocalStorage);
