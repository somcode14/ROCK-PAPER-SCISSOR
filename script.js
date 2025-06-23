let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.getElementById('msg');

const userScorePara = document.querySelector('#user-score');
const computerScorePara = document.querySelector('#comp-score');


const getComputerChoice = () => {
    //rock,paper,scissors
    const options = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];

}



const showWinner = (userWin,userChoice,computerChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
        
    }else{
        computerScore++;
        computerScorePara.innerText = computerScore;
        msg.innerText =`You lose! ${computerChoice} beats  Your ${userChoice}`;
        msg.style.backgroundColor = "red";
       
    }
}

const drawGame = () => {
    msg.innerText ="It's a draw!";
    msg.style.backgroundColor = "blue";
    
}

const playGame = (userChoice) => {
    console.log("user choice is ", userChoice);
    const computerChoice = getComputerChoice();
    console.log("Comp choice is ", computerChoice);


    if (userChoice === computerChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === 'rock') {
            userWin = computerChoice === 'paper' ? false : true;
        } else if (userChoice === 'paper') {
            userWin = computerChoice === 'scissors' ? false : true;
        } else {
            userWin = computerChoice === 'rock' ? false : true;

        }
        showWinner(userWin, userChoice, computerChoice);
    }
}

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');

        playGame(userChoice);
    });
});