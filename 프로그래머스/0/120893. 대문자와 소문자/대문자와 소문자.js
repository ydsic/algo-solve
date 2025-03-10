function solution(my_string) {
    let result = my_string.split('').map(Char => {
        return Char === Char.toUpperCase() ? Char.toLowerCase() : Char.toUpperCase();
    })
    return result.join('')
}