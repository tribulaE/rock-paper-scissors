//Game played against computer//
//Write a function that at random return rock, paper or scissors//

//1. Create a new function called getComputerChoice//
//2. getComputerChoice will randomly return rock paper or scissors//

const help = ["rock", "paper", "scissors"]

function getComputerChoice() {
    return help[Math.floor(Math.random() * help.length)];
}
    

//Create a Function getHumanChoice//
//Create a prompt//
//Use return method in the function//

    function getHumanChoice() {
        return prompt("rock, paper scissors");
    }
    
//Declare the players score variable//
//Create two variable human score and computerScore
//Make them equal 0//
//Move them into the playGame function//



//Create function playRound//S
//Make two parameters fo playRound and HumanChoice and computeChoice//
//Make humanChoice case-insensitive//
//write a function playGame//
//move playRound into playGame//
//call playRound 5 times with a loop//

let humanScore = 0;
let computerScore = 0;


    function playRound(humanChoice, computerChoice) {

        const resultDiv = document.getElementById("result");
        const scoreDiv = document.getElementById("score");
        const winnerDiv = document.getElementById("winner");



        humanChoice = humanChoice.toLowerCase();

        if (humanChoice == computerChoice)  {
            resultDiv.textContent = "Its a tie!!!"
        } else if (humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "paper" && computerChoice == "rock" || humanChoice == "scissors" && computerChoice == "paper"  ){
            resultDiv.textContent = "You win! You deserve a cookie"
            humanScore++;
            scoreDiv.textContent = "You have a score of " + humanScore 


        }   else if (humanChoice == "paper" && computerChoice == "scissors" || humanChoice == "rock" && computerChoice == "paper" || humanChoice == "scissors" && computerChoice == "rock")  {
            resultDiv.textContent = "You lose! BOOOO"
            computerScore++;
            scoreDiv.textContent = "The computer has a score of " + computerScore 
        }   else {
            resultDiv.textContent =("YOU'RE NOT PLAYING THE GAME")
            return false;
        }

        
       
    if (humanScore === 5 || computerScore === 5) {
        if (humanScore > computerScore) {
             winnerDiv.textContent = "CONGRATS YOU WIN!! SCOREBOARD FOR YOU IS " + humanScore + " SCOREBOARD FOR COMPUTER IS "+ computerScore;
        }   else if (humanScore < computerScore) {
        winnerDiv.textContent = "YOU LOSE!! SCOREBOARD FOR COMPUTER " + computerScore + " SCOREBOARD FOR YOU " +  humanScore;
    }   else if (humanScore == computerScore) {
        winnerDiv.textContent = "its a tie"  
    } 
     
       
    }  
    
  
}
        
        

         


     window.addEventListener("DOMContentLoaded", () => {
        document.getElementById("rock").addEventListener("click", () => {
          playRound("rock", getComputerChoice());
        });
      
        document.getElementById("paper").addEventListener("click", () => {
          playRound("paper", getComputerChoice());
        });
      
        document.getElementById("scissors").addEventListener("click", () => {
          playRound("scissors", getComputerChoice());
        });
      });





  


  

  
 
  

