/**
 * ArrowFunction
 * http://paulkogel.github.io/ecmascript-6-einfuehrung/#57
 */

var user = {first: 'Mats', last: 'Becker'};

// ToDo: ?
// output: ${first} and ${last}
var fullName = (first, last) => {
  return '${first} and ${last}';
};

console.log(fullName(user.first, user.last));
