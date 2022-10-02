const number = 11;
const myPromise = new Promise((resolve, reject) => {
  number > 10 ? resolve('done') : reject('failed');
});

myPromise.then((result) => console.log(result)).catch((e) => console.log(e));
