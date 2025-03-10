function solution(my_string) {
    var answer = ['a', 'e', 'i', 'o', 'u'];
    let b = my_string;
    for(let a of answer){
        b = b.split(a).join('');
    }
    return b;

}