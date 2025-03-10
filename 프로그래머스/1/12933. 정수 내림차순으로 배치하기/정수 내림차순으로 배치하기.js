function solution(n) {
    let result = ''
    n = String(n).split('').sort().reverse();

    for(let a of n){
        result += a;
    }
    return parseInt(result);
}