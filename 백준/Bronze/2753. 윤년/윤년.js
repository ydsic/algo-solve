const i = require('fs').readFileSync(0, 'utf8').toString().trim();

if(i % 4 == 0 && i % 100 != 0 || i % 400 == 0) console.log('1');
else console.log('0')