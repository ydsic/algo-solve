function solution(x, n) {
    let a = [];
    while(n > 0){
        a.unshift(x*n);
        n--;
    }
    return a;
}