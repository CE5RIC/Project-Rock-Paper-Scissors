


function computerPlay(array) {
    return array[Math.floor(Math.random() * array.length)];
}

const computerSelection = computerPlay(['rock', 'paper', 'scissors']);

console.log(computerSelection);


let choice = prompt('rock', 'paper', 'scissors?');

const playerSelection = choice;

console.log(playerSelection);

// still not working this part, need to make it parameter case-insensitive
// computerSelection.toLowerCase() === playerSelection.toLowerCase(); 


function playRound(playerSelection, computerSelection) {

    if (computerSelection == playerSelection) {
        return 'Draw!';
    } else if (computerSelection == 'paper' && playerSelection == 'rock') {
        return 'You Lose! Paper beats rock';
    } else if (computerSelection == 'rock' && playerSelection == 'paper') {
        return 'You win! Paper beats rock';
    } else if (computerSelection == 'scissors' && playerSelection == 'paper') {
        return 'You lose! Scissors beats paper';
    } else if (computerSelection == 'paper' && playerSelection == 'scissors') {
        return 'You win! Scissors beats paper';
    } else if (computerSelection == 'rock' && playerSelection == 'scissors') {
        return 'You lose! Rock beats scissors';
    } else if (computerSelection == 'scissors' && playerSelection == 'rock') {
        return 'You win! Rock beats scissors';
    }

}

console.log(playRound(playerSelection, computerSelection));






