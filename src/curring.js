function add(a) {
  return function (b) {
    return a + b;
  };
}

const add1 = add(1);
console.log(add1(2)); //3

// curry function
