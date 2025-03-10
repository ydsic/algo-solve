function solution(numbers) {
    let nums = '0123456789';
    let sum = 0;

    for(let n of numbers){
        nums = nums.replace(String(n), '');
    }
    nums.split('').forEach(num => sum += Number(num));
    return sum
}