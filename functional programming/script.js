// //prepare Tea
// const prepareGreenTea = () => 'greenTea';
// const prepareBlackTea = () => 'BlackTea';

// //Get Tea

// const getTea = (prepareTea, numberOfcups) => {
//   const teaCups = [];

//   for (let cups = 0; cups < numberOfcups; cups++) {
//     const teaCup = prepareTea();
//     teaCups.push(teaCup);
//   }
//   return teaCups;
// };

// //printing it
// console.log(getTea(prepareGreenTea, 27));
// console.log(getTea(prepareBlackTea, 13));
// console.log(prepareGreenTea());

// const values = [1, 2, 3, 4, 'josee', 'selvaa'];
// //?indexof method

// const reset = values.indexOf(1);
// values[reset] = 0;
// console.log(values);
// // const indexof = () => (values.indexOf(4) === -1 ? true : false);
// // console.log(indexof());
// // let evac = indexof();
// // if (evac) {
// //   console.log(`yeah I'm doing something`);
// // } else {
// //   console.log('Ooops it is false');
// // }
// // console.log(values);

// //?splice meThod
// // const spliced = values.splice(4, 2, 'Rathinaswamy');
// // console.log(spliced);
// // console.log(values);

// //?slice Method
// // const slice = values.slice(-4);
// // console.log(slice);
// // console.log(values);

var fixedvalue = 4;
function incrementer(fixedvalue) {
  return fixedvalue + 1;
}

var newval = incrementer(fixedvalue);
console.log(newval);
console.log(fixedvalue);
