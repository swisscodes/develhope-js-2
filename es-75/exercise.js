function repeatHello(cbFunc) {
  const myInterval = setInterval(() => {
    cbFunc();
  }, 1000);
  setTimeout(() => clearInterval(myInterval), 5000);
}

repeatHello(() => console.log('hello'));
