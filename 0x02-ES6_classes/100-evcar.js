import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    const obj = this.constructor[Symbol.species] || this.constructor;
    const newOb = new obj();
    return newOb;
  }
}
