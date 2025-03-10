const i = require('fs').readFileSync(0, 'utf8').trim().split(' ');
const [i1, i2] = i.map(Number);

let min = i1 * 60 + i2 - 45;
if(min < 0) min += 24 * 60;
console.log(Math.floor(min/60) + ' ' + min%60);