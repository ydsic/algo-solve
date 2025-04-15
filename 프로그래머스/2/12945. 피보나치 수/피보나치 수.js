function solution(n) {
    let num1 = 0;
    let num2 = 1;
    let sum = 0;
    
    while(n > 1) {
        sum = (num1 + num2) % 1234567;
        num1 = num2;
        num2 = sum;
        n--;
    }
    return sum;
}