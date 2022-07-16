// const Iseven = (value) => {
//   return new Promise((resolve, reject) => {
//     if (value % 2 == 0) {
//       resolve('even');
//     } else {
//       reject('odd');
//     }
//   });
// };

// Iseven(2)
//   .then((val) => {
//     // return `${val},Some of the ${val} numbers are 4,6,8 etc ...`;
//     console.log(val + ` some of the even numbers are 2,4,6,8`);
//   })
//   .then((show) => {
//     console.log(show + ' !');
//   })

//   .catch((err) => {
//     console.log(err);
//   });

//? CALLBACK HELL USING PROMISES

// const msg = (count) =>
//   new Promise((resolve, reject) => {
//     if (count > 0) {
//       setTimeout(() => {
//         document.querySelector('h1').innerText = count;
//         resolve(count);
//         console.log(count);
//       }, 1000);
//     } else {
//       reject('Happy NewYear');
//     }
//   });

// msg(5)
//   .then((count) => msg(--count))
//   .then((count) => msg(--count))
//   .then((count) => msg(--count))
//   .then((count) => msg(--count))
//   .then((count) => msg(--count))
//   .catch((err) => {
//     setTimeout(() => {
//       document.querySelector('h1').innerText = 'Happy NewYear';
//     }, 1000);
//   });

//? CALL BACK HELL USING ASYNC AWAIT

const msg = (count) =>
  new Promise((resolve, reject) => {
    if (count > 0) {
      setTimeout(() => {
        document.querySelector('h1').innerText = count;
      }, 1000);
      resolve(count);
    }
  });

async function Callback(count) {
  const data = await msg(count);
  const data2 = await msg(data);
}

Callback(5);
Callback(4);
Callback(3);
Callback(2);
Callback(1);
