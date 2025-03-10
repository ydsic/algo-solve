function solution(my_string) {
    let str = my_string.split("")
    let sum = 0;
    for(a of str){
        if(parseInt(a)){
            sum += parseInt(a);
        }
    }
    return sum
}