function solution(my_string) {
    let i = '';
    my_string.split('').reverse().forEach(Char => i+= Char);
    return i
}