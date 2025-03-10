function solution(s) {
    const numData = {
        'zero': 0, 'one': 1, 'two': 2,
        'three': 3, 'four': 4, 'five': 5,
        'six': 6, 'seven': 7, 'eight': 8, 'nine': 9
    };
    
    let numString = '';

    for (let a of s) {
        if (isNaN(a)) { 
            numString += a;
        }

        if (numString in numData) {
            s = s.replace(numString, numData[numString]); 
            numString = ''; 
        }
    }
    return Number(s); 
}