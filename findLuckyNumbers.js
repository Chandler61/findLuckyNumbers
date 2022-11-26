// Write your code below this line.
function uniqueNums(n){
    let randomNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let luckyNumbers = []
    for (let i = 0; i <= n; i++) {
        let p = Math.floor(Math.random() * randomNums.length);
        luckyNumbers.push(randomNums[p])
        randomNums.slice(p, 1)
    }
    return luckyNumbers
}