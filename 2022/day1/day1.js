// Calorie counting
// https://adventofcode.com/2022/day/1

const { input } = require('./input');

function findGreatestSum(arr) {
    let sums = arr.map(str => {
        return str.split('\n').reduce((acc, c) => acc + +c, 0)
    })

    console.log(Math.max(...sums))
}

findGreatestSum(input)