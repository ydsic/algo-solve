function solution(n){
    let sum = 0;
    n.toString().split('').forEach(n => sum += n*1);

    return sum;
}