function solution(n) {
    let a = 0;  // 변수 초기화
    while (n > 0) {
        a += n % 10;  // 마지막 자리 숫자 더하기
        n = Math.floor(n / 10);  // 마지막 자리 제거 (소수점 방지)
    }
    return a;
}
