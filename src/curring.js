function add(a) {
  return function (b) {
    return a + b;
  };
}

const add1 = add(1);
console.log(add1(2)); //3

// curry function

// pure functions
// is functions that with same args always return same output

// reducer function should be pure function
