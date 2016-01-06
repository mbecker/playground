/**
 * Identifying Primitive Types
 */
console.log('Identifying Primitive Types');
console.log('-----------');
console.log(typeof "Nicholas"); // "string"
console.log(typeof 10); // "number"
console.log(typeof 5.1); // "number"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined
console.log(typeof null); // "object"
// The best way to determine if a value is null
// is to compare it against null directly, like this:
console.log('\nDetermine value === null');
var value = null;
console.log(typeof value);
console.log(value ===null);        // true or fals

/**
 * Identifying Reference Types
 */
console.log('\nIdentifying Reference Types');
console.log('-----------');
var items = [];
var object = {};

function reflect(value) {
  return value;
}
console.log('Array []:');
console.log(typeof items); // object
console.log(items instanceof Array); // true
console.log(Array.isArray(items));  // true
console.log(items instanceof Object); // true
console.log('Object {}'); // object
console.log(typeof object);
console.log(object instanceof Object); // true
console.log('function ():');
console.log(typeof reflect); // function
console.log(reflect instanceof Function); // true
console.log(reflect instanceof Object); // true

/**
 * Own storage space priitive types
 * Each variable containing a primitive value uses its own storage space,
 * changes to one variable are not reflected on the other.
 */
console.log('\nOwn storage space priitive types');
console.log('-----------');
var color1 = "red";
var color2 = color1;
console.log(color1); // "red"
console.log(color2); // "red"

color1 = "blue";
console.log(color1); // "blue"
console.log(color2); // "red"

/**
 * Same pointer for object for reference Types
 */
console.log('\nSame pointer for object for reference Types');
console.log('-----------');
var pointer = {};
var a = pointer;
var b = pointer;

a.pointerA = function() {
  console.log(arguments[0] + ' called function pointerA, but was assigned to ' + arguments[1]);
};

b.pointerA('b', 'a'); // b called function pointerA, but was assigned to a

/**
 * Property Acces
 * Dot notation and bracket notation are the same,
 * only difference is that you can use for example
 * whitespace in bracket notation
 */
console.log('\nProperty Acces');
console.log('-----------');
var arr = [];
arr.push(1);
arr['push'](2);
console.log(arr); // [ 1, 2 ]

var method = 'push';
arr[method](3);
console.log(arr); // [ 1, 2, 3 ]
