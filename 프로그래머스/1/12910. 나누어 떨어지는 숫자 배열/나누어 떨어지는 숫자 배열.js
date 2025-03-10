function solution(arr, divisor) {
    let re = [];
    for(let a of arr){
        if(a%divisor == 0){
            re.push(parseInt(a));
        }
    }
    if(re.length == 0){
        re.push(-1);
    }
    return re.sort((a, b) => a - b);
}