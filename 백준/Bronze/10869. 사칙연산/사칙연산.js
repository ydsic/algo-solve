const i = require('fs').readFileSync(0, 'utf8').toString().split(' ');

const i1 = parseInt(i[0]);
const i2 = parseInt(i[1]);

console.log(i1 + i2);
console.log(i1 - i2);
console.log(i1 * i2);
console.log(Math.floor(i1 / i2));
console.log(i1 % i2);
