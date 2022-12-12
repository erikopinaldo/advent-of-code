// Rucksack organization
// https://adventofcode.com/2022/day/3

const { input } = require('./input');

function findOverlaps(assigned) {
    let output = 0
    let rangeArrs = assigned.map(ranges => {
        return ranges.trim().split(',').map(range => range.split('-').map(num => Number(num)))
    })

    rangeArrs.forEach(ranges => {
        if ((ranges[0][0] >= ranges[1][0] && ranges[0][1] <= ranges[1][1]) || (ranges[1][0] >= ranges[0][0] && ranges[1][1] <= ranges[0][1])) output++
    })

    console.log(rangeArrs)
    console.log(output)
}

findOverlaps(input)