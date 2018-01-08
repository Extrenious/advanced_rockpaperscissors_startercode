//Class 1:
        // Fork and clone the repo and set up your project workspace and link files
  
        // Write HTML for your project
        
$(document).ready(function(){
function selectWinner(userChoice, computerChoice) {
    
    if (userChoice === "scissors") {
 
        if (computerChoice === "rock") {
            return "computer wins";
        } else if (computerChoice === "paper") {
            return "user wins";
        } else {
            return "it's a tie";
        }
        
    }
    
    if (userChoice === "rock") {
 
        if (computerChoice === "paper") {
            return "computer wins";
        } else if (computerChoice === "scissors") {
            return "user wins";
        } else {
            return "it's a tie";
        }
        
    }
        if (userChoice === "paper") {
 
        if (computerChoice === "scissors") {
            return "computer wins";
        } else if (computerChoice === "rock") {
            return "user wins";
        } else {
            return "it's a tie";
        }
        
    }
    
    // TODO - we need to handle the cases where the user chooses rock or paper
}



//alert(winner,name);
function getRandomChoice() {
    var Choice = ["rock","paper","scissors"];

    var randomIndex = Math.floor(Math.random() * Choice.length);

    var randomChoice = Choice[randomIndex];
    
    return randomChoice;
 
}

  $("#A").click(function(){
        var CPU = getRandomChoice();
        var UserChoice = $("input").val();
        var winner = selectWinner(UserChoice, CPU);
        alert(winner);
});



});

//Class 2:  
        // Declare four global variables for intial state of the list of choices, the computer choice, the user choice, and the winner.  
        // Practice using console.log() and debugger to debug your code
        // Create your document ready function. 
        // Create a click hander for when the "Shoot!" button is clicked, takes in the user choice from the input field, 
        // Display the user choice to the output screen
//Class 3:  
        // Randomly choose among 'rock', 'paper', or 'scissors' from the list of choices 
        // Display the computer choice to the output screen
        // Compare the user choice and the computer choice to determine who won. 
        // Display the user winner to the output screen 
        // Clear the input box for the next choice

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES



//FUNCTIONS



// DOCUMENT READY FUNCTION

