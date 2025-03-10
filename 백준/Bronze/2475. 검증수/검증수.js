const i = require('fs').readFileSync(0, 'utf8').trim().split(' ');

const List = [i1, i2, i3, i4, i5] = i.map(Number);
let sum = 0;

for(let n of List) sum += n*n;
console.log(sum % 10);