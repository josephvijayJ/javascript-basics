function map(f, cubefn, a) {
  let result = []; // Create a new Array
  let square = [];
  let i; // Declare variable
  for (i = 0; i != a.length; i++) result.push(f(a[i]));
  //   square.push(cubefn(a[i]));
  return result;
}

const f = function (x) {
  return x * x;
};
const cubefn = function (x) {
  return x * x * x;
};
let numbers = [0, 1, 2, 5, 10];
let cube = map(f, cubefn, numbers);
console.log(cube);
console.log('cube index.js changes');
