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

 
function playGame() { 

let humanScore = 0;
let computerScore = 0;


    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice == computerChoice)  {
            console.log("Its a tie!!!")
        } else if (humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "paper" && computerChoice == "rock" || humanChoice == "scissors" && computerChoice == "paper"  ){
            console.log("You win! You deserve a cookie")
            humanScore++;
            console.log("You have a score of " + humanScore);


        }   else if (humanChoice == "paper" && computerChoice == "scissors" || humanChoice == "rock" && computerChoice == "paper" || humanChoice == "scissors" && computerChoice == "rock")  {
            console.log("You lose! BOOOO")
            computerScore++;
            console.log( "The computer has a score of " + computerScore )
        }   else {
            console.log("YOU'RE NOT PLAYING THE GAME")
        }

        
        }

     for (let round = 0; round < 5; round++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        
        
        playRound(humanChoice, computerChoice)

       
    }   if (humanScore > computerScore) {
        console.log("CONGRATS YOU WIN!! SCOREBOARD FOR YOU IS " + humanScore + " SCOREBOARD FOR COMPUTER IS "+ computerScore);
    }   else if (humanScore < computerScore) {
        console.log("YOU LOSE!! SCOREBOARD FOR COMPUTER" + computerScore + " SCOREBOARD FOR YOU " +  humanScore)
    } else if(humanScore == computerScore) {
        console.log("its a tie")
    }
         
          
    }  
playGame();




  


  

  
 
  

