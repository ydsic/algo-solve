function solution(num_list) {
        var answer = [];
    for (let i of num_list){
        answer.unshift(i);
    }

    return answer;
}