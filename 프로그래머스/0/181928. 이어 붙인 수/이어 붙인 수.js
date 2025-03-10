function solution(num_list) {
    let a = '';
    let b = '';
    num_list.map(x => x % 2 == 0 ? a += x : b += x);
    return parseInt(a) + parseInt(b);
}