function solution(arr) {
    let avr = 0;
    arr.forEach(a => avr += a);
    return avr / arr.length;
}