let test2 = require('./test2');

console.log(test2.add(23, 36));

try {
  console.log(test2.divide(23, 0));
} catch (error) {
  console.error('Error:', error.message);
}

console.log(test2.multiply(23, 36));