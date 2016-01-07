'use strict';
/**
 * Generators
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
 *
 * The Generator object is returned by a generator function and it conforms to both the iterator and the Iterable protocol.
 * The function* declaration (function keyword followed by an asterisk) defines a generator function, which returns a Generator object.
 */
function* idMaker() {
  var index = 0;
  while(index < 3) {
    yield index++;
  }
}
var gen = idMaker();
console.log(gen.next()); // 0
console.log(gen.next()); // 1
console.log(gen.next()); // 2
console.log(gen.next()); // undefined
// Fibonacci
console.log('-- Fibonacci --');

function* fibonacci() {
  var a = yield 1;
  yield a * 2;
}
var it = fibonacci();
console.log(it); // 'Generator {  }'
console.log(it.next()); // 1
console.log(it.next(10)); // 20
console.log(it.next()); // throws StopIteration (as the generator is now closed)
// Multiplication
console.log('-- Multiplication --');
var x = function*(y) {
  yield y * y;
};
console.log(x(2).next());
console.log(x(4).next());
// Delegation to antotger generator
console.log('-- Delegation to antotger generator --');

function* g1() {
  yield 2;
  yield 3;
  yield 4;
}

function* g2() {
  yield 1;
  yield * g1();
  yield 5;
}
var iterator = g2();
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: 4, done: false }
console.log(iterator.next()); // { value: 5, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
// Other iterable objects
console.log('-- Other iterable objects --');

function* g3() {
  yield * [1, 2];
  yield * 'XY';
  yield * Array.from(arguments);
}
var iterator = g3('Test 1', 'Test 2');
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: '3', done: false }
console.log(iterator.next()); // { value: '4', done: false }
console.log(iterator.next()); // { value: 5, done: false }
console.log(iterator.next()); // { value: 6, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
// Class iterable using yield
class Classroom {
  constructor() {
    var args = Array.prototype.slice.call(arguments, Classroom.length);
    //this.students = students;
  }
  *[Symbol.iterator]() {
    for(let s of this.students) {
      yield s;
    }
  }
}
var scienceClass = new Classroom('Tim', 'Sue', 'Joy');
var students = [];
for(let student of scienceClass) {
  students.push(student);
}
expect(students).toEqual(['Tim', 'Sue', 'Joy'])
