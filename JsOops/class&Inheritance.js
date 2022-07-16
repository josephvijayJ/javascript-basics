class Vehicle {
  constructor(brand, engine, cost, sunroof, year) {
    this.brand = brand;
    this.engine = engine;
    this.cost = cost;
    this.sunroof = sunroof;
    this.year = year;
  }
  get_BrandandEngine() {
    return `This is a newbrand ${this.brand} of engine ${this.engine}`;
  }
}

class spareParts extends Vehicle {
  constructor(brand, engine, cost, sunroof, year, wheel, Bumper, gearrod) {
    super(brand, engine, cost, sunroof, year);
    this.wheel = wheel;
    this.Bumper = Bumper;
    this.gearrod = gearrod;
  }
  SparepartsAvailability(sparePrice) {
    if (this.cost >= sparePrice) {
      return `Company is ready to sell the Spareparts`;
    } else {
      return `Sorry,Your budget is low ...`;
    }
  }
  needsTobeServiced() {
    try {
      const currentyear = new Date().getFullYear();
      console.log(this.year);
      if (currentyear - this.year > 1) {
        const res = currentyear - this.year;
        console.log(res);
        return `Needs to be serviced as it exceeds one year`;
      } else {
        return `Service will be done regulary after one year,If you wish you can carry on ...`;
      }
    } catch (err) {
      return `${err},Error occured in service function `;
    }
  }
}

const Company1 = new spareParts(
  'Tata',
  'v8',
  20_00_00_0,
  false,
  2020,
  4,
  true,
  true
);
console.log(Company1.get_BrandandEngine());
console.log(Company1.SparepartsAvailability(2000000));
console.log(Company1.needsTobeServiced());

const Company2 = new spareParts(
  'Maruti',
  'v9',
  20_00_00_0,
  false,
  2018,
  4,
  true,
  true
);
console.log(Company2.get_BrandandEngine());
console.log(Company2.SparepartsAvailability(2000000));
console.log(Company2.needsTobeServiced());
