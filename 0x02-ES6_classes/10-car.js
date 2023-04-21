export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const obj = this.constructor[Symbol.species] || this.constructor;
    const newOb = new obj();
    return newOb;
  }
}
