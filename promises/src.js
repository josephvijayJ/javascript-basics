// function add(multiplication) {
//   console.log('Add function done');
//   multiplication(5, 4);
// }

// function multiplication(val1, val2) {
//   console.log(val1 * val2);
// }

// add(multiplication);

const even = (val) => {
  return new Promise((resolve, reject) => {
    if (val % 2 == 0) {
      setTimeout(() => {
        resolve('even');
      }, 3000);
    } else {
      reject('odd');
    }
  });
};

// even(14)
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function evenFinding(sub) {
  const data = await even(14);
  console.log(data);
  sub(data);
}
evenFinding(sub);
function sub(data) {
  console.log(data);
}
