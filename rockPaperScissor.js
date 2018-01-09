var rock = 0;
var paper = 1;
var scissors = 2;
var computerChoice = cChoice();
var uRock = document.getElementById('rock');
var uPaper = document.getElementById('paper');
var uScissors = document.getElementById('scissors');



uRock.addEventListener('click', function(event) {

    rockPaperscissors("rock", cChoice())
})

uPaper.addEventListener('click', function(event) {

    rockPaperscissors("paper", cChoice())
})

uScissors.addEventListener('click', function(event) {

    rockPaperscissors("scissors", cChoice())
})



function cChoice() {


    var choice = Math.floor(Math.random() * 3)
    if (choice == 0) {
        return "rock";
    }
    if (choice == 1) {
        return "paper";
    }
    if (choice == 2) {
        return "scissors";
    }


}





function rockPaperscissors(pChoice,
    cChoice) {
    if (pChoice == "rock" && cChoice == 'paper') {
        alert("You chose rock, the computer chose paper. You lose.")
    } else if (pChoice == "rock" && cChoice == 'scissors') {
        alert("You chose rock, the computer chose scissors. You win.")
    } else if (pChoice == "rock" && cChoice == 'rock') {
        alert("You chose rock, the computer chose paper. You lose. You tie.")
    } else if (pChoice == "paper" && cChoice == 'paper') {
        alert("You chose paper, the computer chose paper. You tie.")
    } else if (pChoice == "paper" && cChoice == 'scissors') {
        ("You chose paper, the computer chose scissors. You lose.")
    } else if (pChoice == "paper" && cChoice == 'rock') {
        alert("You chose paper, the computer chose rock. You win.")
    } else if (pChoice == "scissors" && cChoice == 'rock') {
        alert("You chose scissors, the computer chose rock. You lose.")
    } else if (pChoice == "scissors" && cChoice == 'paper') {
        alert("You chose scissors, the computer chose rock. You win.")
    } else if (pChoice == "scissors" && cChoice == 'scissors') {
        alert("You chose scissors, the computer chose scissors. You tie.")
    }

}