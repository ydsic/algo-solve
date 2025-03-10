const i = require('fs').readFileSync(0, 'utf8').trim().split(' ')
let [i1, i2] = i.map(Number);

if(i1*100 >= i2) console.log('Yes');
else console.log('No');