function printAsyncName(callbFunc, name) {
  setTimeout(callbFunc, 1000);
  setTimeout(() => {
    console.log(name);
  }, 2000);
}

const printHello = () => {
  process.stdout.write('Hello ');
};

printAsyncName(printHello, 'Femi');
