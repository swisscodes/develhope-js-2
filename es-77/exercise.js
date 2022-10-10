const isLogged = true;

function firstPromise(logCheck) {
  return new Promise((resolve, reject) => {
    if (isLogged) {
      resolve(Math.floor(Math.random() * 9 + 1));
    }
  });
}

function secondPromise(num) {
  new Promise((resolve, reject) => {
    if (typeof num === 'number' && num > 0.5) {
      resolve({ name: 'John', age: 24 });
    } else reject(new Error('some error occured'));
  });
}
