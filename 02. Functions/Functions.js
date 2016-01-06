/**
 * Functions as values
 */

/**
 * By default, sort() converts every item in an array to a string and then performs a comparison.
 * That means you can’t accurately sort an array of numbers without specifying a comparison function.
 * For example, you need to include a comparison function to accurately sort an array of num- bers, such as:
 */
console.log('Identifying Primitive Types');
console.log('-----------');
var numbers = [1, 5, 8, 4, 7, 10, 2, 6];
numbers.sort(function(first, second) {
  console.log('First: ' + first);
  console.log('Second: ' + second);
  console.log('Result: ' + (first - second));
  return first - second;
});
console.log(numbers); // "[1, 2, 4, 5, 6, 7, 8, 10]"
numbers.sort();
console.log(numbers); // "[1, 10, 2, 4, 5, 6, 7, 8]"
