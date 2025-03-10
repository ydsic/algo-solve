const i = require('fs').readFileSync(0, 'utf8').toString().split('\n');

const i1 = i[0];
const i2 = i[1];

console.log(i1 * Number(i2[2]));
console.log(i1 * Number(i2[1]));
console.log(i1 * Number(i2[0]));
console.log(Number(i1) * Number(i2));