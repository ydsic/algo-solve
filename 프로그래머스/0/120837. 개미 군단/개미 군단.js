function solution(hp) {
    let result = 0;
    result += Math.floor(hp / 5);
    hp = hp % 5;
    result += Math.floor(hp / 3);
    hp = hp % 3;
    result += Math.floor(hp / 1);
    return result;
}