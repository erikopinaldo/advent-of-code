// Rock paper scissors
// https://adventofcode.com/2022/day/2

const { input } = require('./input');

function rps(guide) {
    let shapeScores = {
        'A': 1, 
        'X': 1, 
        'B': 2, 
        'Y': 2, 
        'C': 3,
        'Z': 3
    }

    let shapes = {
        'A': 'rock',
        'X': 'rock',
        'B': 'paper',
        'Y': 'paper',
        'C': 'scissors',
        'Z': 'scissors'
    }

    let score = 0

    guide.forEach(game => {
        let gameArr = game.split(' ')
        let opp = gameArr[0]
        let mine = gameArr[1].trim()
        
        if (shapes[mine] === 'rock' && shapes[opp] === 'scissors' || shapes[mine] === 'paper' && shapes[opp] === 'rock' || shapes[mine] === 'scissors' && shapes[opp] === 'paper') {
            score += 6
        }
        else if (shapes[mine] === shapes[opp]) {
            score += 3
        }

        score += shapeScores[mine]
    })
    console.log(score)
}

rps(input)