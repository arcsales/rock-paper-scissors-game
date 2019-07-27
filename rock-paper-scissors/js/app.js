let rockCoise = document.getElementById('rock');
let paperCoise = document.getElementById('paper');
let scissorsCoise = document.getElementById('scissors');
let arrayChoises = ['rock', 'paper', 'scissors'];
let winnerMessage = document.getElementById('message-data');
let playerScore = document.getElementById('player-score');
let computerScore = document.getElementById('computer-score');

function compRandNum() {
    let compNum = Math.floor(Math.random() * 3);
    return compNum;
}

function compWins() {
    winnerMessage.textContent = 'Computer wins! You lose 💩';
    let compScoreToNum = +computerScore.textContent;
    computerScore.textContent = ++compScoreToNum;
    fading(computerScore);
    unFading(computerScore);
}

function playerWins() {
    winnerMessage.textContent = 'You beat the computer! 🖥';
    let playerScoreToNum = +playerScore.textContent;
    playerScore.textContent = ++playerScoreToNum;
    fading(playerScore);
    unFading(playerScore);
}

function raw() {
    winnerMessage.textContent = 'Its a raw! So... you lose again!';
}

function play(choise) {
    let compChoise = compRandNum();
    switch (choise + arrayChoises[compChoise]) {
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            raw();
            break;
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            compWins();
            break;
        default:
            playerWins();
    }

}

rockCoise.addEventListener('click', function() {
    play('rock');
});
paperCoise.addEventListener('click', function() {
    play('paper');
});
scissorsCoise.addEventListener('click', function() {
    play('scissors');
});

function fading(el) {
    if (el.style.color = '#fff') {
        el.style.color = '#59cc37'
    }
}

function unFading(el) {
    setTimeout(function() {
        if (el.style.color = '#59cc37') {
            el.style.transition = 'all 0.4s';
            el.style.color = '#fff';
        }
    }, 400)
};