const i = require('fs').readFileSync(0, 'utf8').toString().split(' ');

const i1 = Number(i[0]);
const i2 = Number(i[1]);
const i3 = Number(i[2]);

console.log(i1 + i2 + i3);