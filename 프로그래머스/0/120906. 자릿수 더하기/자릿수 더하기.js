function solution(n) {
    let a = 0; 
    while (n > 0) {
        a += n % 10; 
        n = Math.floor(n / 10);  
    }
    return a;
}
