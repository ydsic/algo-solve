function solution(n) {
    let a = 0;
    if(n % 2 == 0){
        
    } else {
        n--;
    }
    for (n; 0 <= n; n-=2){
    a += n;
    }
    return a;
}