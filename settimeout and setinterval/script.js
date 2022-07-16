// setTimeout(() => {
//   console.log('hye');
//   return (document.body.style.backgroundColor = 'red');
// }, 2000);
// let i = 0;
// let colors = ['red', 'crimson', 'yellow', 'blue'];
// function bodyColorChange() {
//   if (i === colors.length) {
//     i = 0;
//   }
//   document.body.style.background = colors[i];
//   i++;
// }

// let repeatBackgroundChange = setInterval(bodyColorChange, 2000);
// setTimeout(() => clearInterval(repeatBackgroundChange), 6000);

setTimeout(() => {
  console.log('hi');
  setTimeout(() => {
    console.log('2secs over');
  }, 2000);
}, 2000);

const stop = setInterval(() => {
  console.log(3);
}, 1000);

setTimeout(() => clearInterval(stop), 5000);
