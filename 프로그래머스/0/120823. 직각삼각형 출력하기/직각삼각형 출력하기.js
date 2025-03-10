const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let s = '*';

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    for(let a = 1; a <= input; a++){
        console.log(s)
        s += '*';
    }
});