function solution(n) {
    let a = Math.floor(n/7);
    if(n%7 != 0){
        return a+1;
    } else {
        return a;
    }
}