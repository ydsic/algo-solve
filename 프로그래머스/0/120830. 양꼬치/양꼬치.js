function solution(n, k) {
    let service = Math.floor(n / 10);
    n *= 12000;
    k *= 2000;
    if (service >= 1){
        return n + k - service * 2000;
    } else {
        return n + k;
    }

}