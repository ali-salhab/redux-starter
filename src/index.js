// function sayHello(a) {
//   a("Hello, World!");
//   return "Hello, World!";
// }
// // fyunctions are first-class citizens in JavaScript
// let fn = sayHello;

// fn((a) => {
//   console.log(a);
// }); // Hello, World!
// // Hello, World!
// // what wrong in this code?
// // terminal say a is not a function
// //

// function sayHello(a) {
//   return function inner() {
//     return a("Hello, World!");
//   };
// }

// sayHello(()=?)

// higher order function is a function that takes another function as an argument or returns a function as its result.
setTimeout(() => {
  console.log("====================================");
  console.log("dd");
  console.log("====================================");
}, 1000);
let counter = 0;
setInterval(() => {
  counter++;
  console.log("====================================");
  console.log(counter);
  console.log("====================================");
  counter > 5 ? clearInterval() : null; //how this line executed ?
  //

  //   how to clear terminal logs from this function ?
  //
  //
  //   how to make it stop?
  //
}, 1200);

// console.log(true && false); //false
// console.log(false && false); //false
// console.log(true && true); //true
// console.log(false && true); //false

// console.log(true || false); //true
// console.log(false || false); //false
// console.log(true || true); //true
// console.log(false || true); //true

// let input ="                javascript          "
// let output=

// now  function composition is :
// let trim = function (str) {
//   return str.replace(/^\s+|\s+$/g, "");
// };

// let toLowerCase = function (str) {
//   return str.toLowerCase();
// };

// let wrapInDiv = function (str) {
//   return `<div>${str}</div>`;
// };

// // let result = wrapInDiv(toLowerCase(trim(input)));

// // console.log(result); // <div>javascript</div>

// // compose functions
// let compose = function (...fns) {
//   return function (value) {
//     return fns.reduceRight(function (acc, fn) {
//       return fn(acc);
//     }, value);
//   };
// };

// let transform = compose(wrapInDiv, toLowerCase, trim);

// let result = transform(input);

// console.log(result); // <div>javascript</div>

// function add(a, b) {
//   return a + b;
// }

// function curry(fn) {
//   return function curried(...args) {
//     if (args.length >= fn.length) {
//       return fn.apply(this, args);
//     } else {
//       return function (...args2) {
//         return curried.apply(this, args.concat(args2));
//       };
//     }
//   };
// }

// let curriedAdd = curry(add);

// console.log(curriedAdd(2)(3)); // 5
// console.log(curriedAdd(2, 3)); // 5
// console.log(curriedAdd(2)(3)(4)); // NaN
// console.log(curriedAdd(2, 3, 4)); // 5

// import { compose, pipe, wrap } from "lodash/fp";
// const trim = (str) => str.trim();

// const toLowerCase = (str) => str.toLowerCase();

// const wrapInDiv = (str) => `<div>${str}</div>`;
// compose(wrapInDiv, toLowerCase, trim)("    Javascript");
// pipe(trim, toLowerCase, wrapInDiv)("    Javascript");

// curry function using lodash
