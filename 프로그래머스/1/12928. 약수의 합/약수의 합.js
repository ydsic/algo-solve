function solution(n) {
    let sum = 0;
    
    for(let a = 1; a <= n; a++){
        if(n % a === 0){
            sum += a;
        }
    }
    return sum;
}