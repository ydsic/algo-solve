function solution(s){
    let a = 0;
    let b = 0;
    s = s.toLowerCase().split('');
    for(let al of s){
        if(al === 'p') a++;
        if(al === 'y') b++;
    };
    return a == b;
}