function solution(s) {
    s = s.toLowerCase().split(' ');
    
    for(let i in s){
        if(s[i]) s[i] = s[i][0].toUpperCase() + s[i].slice(1);
    }
    return s.join(" ")
}