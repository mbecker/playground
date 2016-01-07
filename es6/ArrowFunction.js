/**
 * ArrowFunction
 * http://paulkogel.github.io/ecmascript-6-einfuehrung/#57
 */
var user = {
  first: 'Mats',
  last: 'Becker'
};
// ToDo: ?
// output: ${first} and ${last}
var fullName = (first, last) => {
  return `First name: ${first}
Last name: ${last}`;
};
console.log(fullName(user.first, user.last));

var car = {
  model: 'BMW',
  drivers: ['Mats', 'Irina'],
  logDrivers() {
    this.drivers.forEach((driver) => {
      console.log(`${driver} is driving a ${this.model}`);
    });
  }
};
car.logDrivers();

// https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions

var simple = a => a > 15 ? 15 : a;
console.log(simple(16));; // 15
console.log(simple(10));; // 10

var arr = [5, 6, 13, 0, 1, 18, 23];
var sum = arr.reduce((a, b) => a + b);  // 66
var even = arr.filter(v => v % 2 == 0); // [6, 0, 18]
var double = arr.map(v => v * 2);       // [10, 12, 26, 0, 2, 36, 46]
