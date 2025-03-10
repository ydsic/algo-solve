const i = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const [i1, i2] = i[0].split(' ').map(Number)
const i3= i[1];

let time = i1 * 60 + i2 + Number(i3);
let hour = Math.floor(time/60)

if(time/60 >= 24){
  hour -= 24;
}

console.log(hour + ' ' + time % 60)