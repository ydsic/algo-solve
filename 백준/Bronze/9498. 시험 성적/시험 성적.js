const i = require('fs').readFileSync(0, 'utf8').toString().trim();

if(i >= 90 && i <= 100) console.log('A');
else if(i >= 80 && i <= 89) console.log('B');
else if(i >= 70 && i <= 79) console.log('C');
else if(i >= 60 && i <= 69) console.log('D');
else console.log('F');