function repeatHello(cbFunc) {
  setInterval(() => {
    cbFunc();
  }, 1000);
}

repeatHello(() => console.log('hello'));

/* for me i do not see any reason why it has to be an arrow function
or regular function as 
we havent perform anything that needs to be bind to the calling function 
Yes i do understand that this doesnt exist in arrow functions

the only thing i can say is incase some logics are performed
in the arrow function then any (this) inside the pass arrow function
will refer to the original function so we that we get access to data's inside the calling function
*/
