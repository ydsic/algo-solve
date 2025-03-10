function solution(sides) {
    for(let i = 0; i < 3; i++){
        if(sides[2] >= sides[0] + sides[1]){
            return 2;
        } else if (sides[1] >= sides[2] + sides[0]) {
            return 2;
        } else if(sides[0] >= sides[1] + sides[2]){
            return 2;
        } else {
            return 1;
        }
    }
}