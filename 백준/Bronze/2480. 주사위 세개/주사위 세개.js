const i = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').sort();

const [i1, i2, i3] = i.map(Number);

if (i1 == i2 && i2 == i3) console.log(10000 + i1 * 1000);
else if (i1 == i2 || i1 == i3) console.log(1000 + i1 * 100);
else if (i2 == i3) console.log(1000 + i2 * 100);
else console.log(i3 * 100);
