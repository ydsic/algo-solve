function solution(numbers) {
    let len = numbers.length;
    numbers.sort((a, b) => b - a);
    let maxNum1 = numbers[0] * numbers[1];
    let maxNum2 = numbers[len -1] * numbers[len -2];
    return Math.max(maxNum1, maxNum2);
}