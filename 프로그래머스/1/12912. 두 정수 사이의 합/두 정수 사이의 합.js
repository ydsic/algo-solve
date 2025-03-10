function solution(a, b) {
    let q = 0;
    if(a == b){
        return a;
    } else {
        for(let i = Math.min(a, b); i <= Math.max(a, b); i++){
        q += i;
        }
        return q;
    }
}