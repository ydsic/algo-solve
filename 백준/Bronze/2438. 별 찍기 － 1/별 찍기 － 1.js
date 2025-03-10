const i = require('fs').readFileSync(0, 'utf8').toString().trim();
let b = '*';
for(let a = 0; a < i; a++){
    console.log(b);
    b += '*';
}