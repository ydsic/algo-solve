const i = require('fs').readFileSync(0, 'utf8').toString().split('\n');

const i1 = Number(i[0]);
const i2 = Number(i[1]);

if(i1 > 0){
    if(i2 > 0){
        console.log('1');
    } else {
        console.log('4');
    }
} else {
    if(i2 > 0){
        console.log('2');
    } else {
        console.log('3');
    }
}