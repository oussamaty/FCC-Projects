const Rock = document.getElementById("Rock");
const Paper = document.getElementById("Paper");
const Scissors = document.getElementById("Scissors");
const PlayerResult = document.getElementById("playerResult");
const ComputerResult = document.getElementById("computerResult");
const Message = document.getElementById("message");
let playerResult = 0;
let computerResult = 0;

const computerChoice = () => ['Rock','Paper','Scissors'][Math.floor(Math.random()*3)];

const win = (playerChoice) => {
    playerResult++;
    PlayerResult.innerHTML = playerResult;
    PlayerResult.classList.add('green-shine');
    ComputerResult.classList.add('green-shine');
    Message.innerHTML = `${playerChoice} beats ${computerChoice()}. You win!!`;
    document.getElementById(playerChoice).classList.add('green-glow');
    setTimeout(() =>  {
        document.getElementById(playerChoice).classList.remove('green-glow'); 
        PlayerResult.classList.remove('green-shine'); 
        ComputerResult.classList.remove('green-shine');
        },100);
}

const lose = (playerChoice) => {
    computerResult++;
    ComputerResult.innerHTML = computerResult;
    PlayerResult.classList.add('red-shine');
    ComputerResult.classList.add('red-shine');
    Message.innerHTML = `${playerChoice} loses to ${computerChoice()}. You lose...`;
    document.getElementById(playerChoice).classList.add('red-glow');
    setTimeout(() => {
        document.getElementById(playerChoice).classList.remove('red-glow');
        PlayerResult.classList.remove('red-shine'); 
        ComputerResult.classList.remove('red-shine');
        },100);
}

const draw = (playerChoice) => {
    Message.innerHTML = `It's a DRAWWW?!`;
    PlayerResult.classList.add('yellow-shine');
    ComputerResult.classList.add('yellow-shine');
    document.getElementById(playerChoice).classList.add('yellow-glow');
    setTimeout(() => {
        document.getElementById(playerChoice).classList.remove('yellow-glow'); 
        PlayerResult.classList.remove('yellow-shine'); 
        ComputerResult.classList.remove('yellow-shine');
        },100);
}

const game = (playerChoice) => {
    switch(playerChoice + computerChoice()) {
        case 'RockScissors':
        case 'ScissorsPaper':
        case 'PaperRock':
            win(playerChoice);
            break;
        case 'RockPaper':
        case 'PaperScissors':
        case 'ScissorsRock':
            lose(playerChoice);
            break;
        default:
            draw(playerChoice);
            break;
    }
}

const main = () => {
    Rock.addEventListener('click', () => game('Rock'));
    Paper.addEventListener('click', () => game('Paper'));
    Scissors.addEventListener('click', () => game('Scissors'));
}

main();
