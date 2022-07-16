// const users = [['jose', 'Vijay', [1, 2, 3]], 'Bibin', 'Aagash'];
// console.log(users[0][2][2]);

// let user = ['Joseph', 'coimbatore', '1'];

// const Name = user[0];
// const city = user[1];
// const id = user[2];

// const [name, city, id] = user;
// console.log(name, city, id);

// let users = {
//   name: 'Jose',
//   address: {
//     city: 'Chennai',
//     street: 'cross cut feet',
//   },
//   state: ['tamilnadu', 'Andhra', 'Madhya Pradesh'],
//   pin: 54132,
// };

// function displayUsers({ name, pin, age = '22' }) {
//   console.log(`My name is ${name} and my pincode is is ${pin} and also my age is
//   ${age}`);
// }

// displayUsers(users);

// const fruits = ['apple', 'banana', 'orange', 'jackfruit', 'berryfruit'];

// const [fruit1, , fruit3, ...rest] = fruits;

// console.log(fruit1);
// console.log(fruit3);
// console.log(rest);

//?combining Arrays and object together

// const grocerylist = [
//   {
//     item: 'Apples',
//     price: 25,
//     category: 'fruits',
//   },
//   {
//     item: 'Mangoes',
//     price: 30,
//     category: 'fruits',
//   },
//   {
//     item: 'tomatoes',
//     price: 15,
//     category: 'vegetables',
//   },
//   {
//     item: 'milk',
//     price: 20,
//     category: 'Dairy',
//   },
//   {
//     item: 'eggs',
//     price: 8,
//     category: 'Dairy',
//   },
// ];

// const [, { item }, { price }, ...rest] = grocerylist;

// console.log(item);
// console.log(price);
// console.log(rest);

//?Object and inside array

// const company = {
//   name: 'Google',
//   locations: ['India', 'USA', 'Germany'],
// };

// const {
//   locations: [, , loc],
// } = company;
// console.log(loc);

//?Array and inside object
// const list = [
//   {
//     name: 'jose',
//     age: 22,
//     interests: ['books', 'money', 'movie', 'coding'],
//   },
//   {
//     name: 'Nizar',
//     age: 23,
//     interests: ['money', 'movie', 'business'],
//   },
//   {
//     name: 'vijay',
//     age: 22,
//     interests: ['books', 'Cybersecurity'],
//   },
// ];

// const [
//   { name: mySelf },
//   {
//     interests: [money, movie],
//   },
// ] = list;
// console.log(mySelf);
// console.log(movie);

const users = [
  ['joseph', 'vijay'],
  ['mohammed', 'nizar'],
  ['narayanan', 'vel'],
];

/*
//* output should be like
[
    {
    firstname:'joseph',
    lastname:'vijay'
    },
    {
    firstname:'joseph',
    lastname:'vijay'
    },
    {
    firstname:'joseph',
    lastname:'vijay'
    },
];
*/

const userObj = users.map((user) => {
  return { firstname: user[0], lastname: user[1] };
});
console.log(userObj);
