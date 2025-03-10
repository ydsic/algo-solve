function solution(a, b) {
    let i = parseInt(a.toString() + b.toString());
    let j = parseInt(b.toString() + a.toString());
    return Math.max(i, j);
}