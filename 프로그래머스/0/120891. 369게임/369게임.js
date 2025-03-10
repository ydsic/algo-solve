function solution(order) {
    order = String(order);
    let num = order.split("");
    let re = 0;
    for(a of num){
        if(parseInt(a)%3==0 && parseInt(a)/3 > 0){
            re ++
        }
    }
    return re;
}