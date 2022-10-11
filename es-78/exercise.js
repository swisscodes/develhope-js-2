const isLogged = true;

function firstPromise(logCheck) {
  return new Promise((resolve, reject) => {
    if (logCheck) {
      resolve(Math.floor(Math.random() * 9 + 1));
    } else {
      reject(new Error('something went wrong from first promise'));
    }
  });
}

function secondPromise(num) {
  return new Promise((resolve, reject) => {
    if (typeof num === 'number' && num > 0.5) {
      resolve({ name: 'John', age: 24 });
    } else reject(new Error('some error occured from second promise'));
  });
}

firstPromise(isLogged)
  .then(secondPromise)
  .then((result) => console.log(result))
  .catch((err) => console.log(err))
  .finally(() => console.log('done'));
