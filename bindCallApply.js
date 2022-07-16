const info = {
  name: 'jose',
  address: {
    state: 'tamilnadu',
    city: 'coimbatore',
    exposure: [
      {
        insideIndia: ['thoothukudi', 'tirunelveli'],
        outsideIndia: ['Dubai', 'USA'],
      },
    ],
  },
  namePrint: function () {
    console.log(`my name is ${this.name}`);
  },
};

info.namePrint();

//function borrowing

const info1 = {
  name: 'bibin',
};

info.namePrint.call(info1);

const add = function (num3) {
  console.log(this.num1 + ' ' + this.num2 + ' ' + num3);
};

let firstObj = {
  num1: 5,
  num2: 4,
};

// add.call(firstObj, 5);

add.apply(firstObj, [5]);

let bindMethod = add.bind(firstObj, 9);

bindMethod();
