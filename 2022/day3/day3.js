// Rucksack organization
// https://adventofcode.com/2022/day/3

const { input } = require('./input');

function findDupes(rucksacks) {
    let output = 0
    
    rucksacks.forEach(rucksack => {
        let priorities = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        let half = rucksack.length / 2
        let comp1 = rucksack.split('').slice(0, half)
        let comp2 = rucksack.split('').slice(half)
        let dupe = comp1.filter(item => comp2.includes(item))[0]

        output += priorities.indexOf(dupe) + 1
    })
    console.log(output)
}

findDupes(input)