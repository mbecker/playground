'use strict';
/**
 * Classes
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // Prototype methodes with Getter and Setter

  get area() {
    return this.calcArea();
  }

  set pointx(x) {
    this.x = x;
  }

  get pointx() {
    return this.x;
  }

  calcArea() {
    return this.x * this.y;
  }

  // Static methods
  // The static keyword defines a static method for a class. Static methods are called without instantiating their class and are also not callable when the class is instantiated. Static methods are often used to create utility functions for an application.

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.sqrt(dx * dx + dy * dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2));
console.log('Area: ' + p1.area);
console.log('Point 1: ' + p1.pointx);
p1.pointx = 10;
console.log('Point 1: ' + p1.pointx);
