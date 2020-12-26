let player = prompt('Your name');

let pname = document.querySelector('h1');
pname.textContent = `Hello ${player}`;

let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;

let option = document.querySelectorAll('.options');
let options1 = ['rock','paper','scissors'];

function computerPlay(){
    return options1[Math.floor(Math.random()*3)];
}

function updateScore(){
    let ps = document.querySelector('#ys');
    let cs = document.querySelector('#cs');
    ps.textContent = playerScore;
    cs.textContent = computerScore; 
}

function playRound(playerSelection){
    computerSelection = computerPlay();
    if(
        (playerSelection=='rock'&&computerSelection=='scissors')||
        (playerSelection=='paper'&&computerSelection=='rock')||
        (playerSelection=='scissors'&&computerSelection=='paper')
    ){
        displayResult('You won');
        playerScore++;
    }
    else if(
        (playerSelection=='rock'&&computerSelection=='paper')||
        (playerSelection=='paper'&&computerSelection=='scissors')||
        (playerSelection=='scissors'&&computerSelection=='rock')
    ){
        displayResult('You lost');
        computerScore++;
    }
    else{
        displayResult('Tie game');
    }
    updateScore();
}

function displayResult(string){
    let result = document.querySelector('h2');
    result.textContent = string;
}

function declareWinner(){
    let result = document.querySelector('#result');
    result.classList.add('result');
    if(playerScore==5){
        result.textContent = 'You Won the Game!!!!!';
    }
    else{
        result.textContent = 'You lost the game';
    }
}

function reload(){
    window.location.reload();
}

option.forEach((options) => {
    options.addEventListener('click', () => {
        const img = options.querySelector('img');
        playerSelection = img.alt.toLowerCase();

        
        if(playerScore===5||computerScore===5){
            declareWinner();
        }
        else{
            playRound(playerSelection);
            if(playerScore===5||computerScore===5){
            declareWinner();
        }
        }
    });
});




