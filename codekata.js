// // Sample Input :
// // 1234
// // Sample Output :
// // 2 4
// // 1 3

// let a = 1234
// // a = a.split('').join(',');
// // console.log(typeof(a));

// let ar = '';

// ar =ar + a;

// console.log(typeof(ar));
// let even = ar.filter(num => parseInt(num)%2==0);
// console.log(typeof(num));
// let odd = ar.filter(num => parseInt(num) %2 !==0);

// // console.log(typeof(even));
// // console.log(odd);
// ar=ar.split('');
// console.log(ar);
//  let even = ar.filter()

// let user = {
//   name: 'josee',
//   age: 21,
// };
// const user1 = [1, 2, 3, 4, 4];

// const usermanual = {
//   ...user,
//   height: 6.5,
// };
// console.log(usermanual);

// const add = (c, ...a) => {
//   console.log(c);
//   return a.filter((val) => val > 5);
// };

// console.log(add(1, 2, 3, 4, 5, 6, 7, 8, 9, 0));

const user = {
  name: 'jose',
  age: 21,
  nameAge: getNameAge,
};
const user1 = {
  name: 'Praveen',
  age: '20.5',
};
const user2 = {
  name: 'Hari',
  age: '20',
};
function getNameAge(height) {
  return `My name is ${this.name} and my age is ${this.age} and also my height is ${height}`;
}

// console.log(user.nameAge());
// console.log(user.nameAge.call(user1, 6.2));
// console.log(user.nameAge.apply(user2, [5.1]));
let x = user.nameAge.bind(user1);
console.log(x());
