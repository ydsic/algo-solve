function solution(rsp) {
    let result = '';
    
    for (let i = 0; i < rsp.length; i++) {
        if (rsp.charAt(i) == '2') {
            result += '0';
        } else if (rsp.charAt(i) == '5') {
            result += '2';
        } else if (rsp.charAt(i) == '0') {
            result += '5';
        }
    }
    return result;
}