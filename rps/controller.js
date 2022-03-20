var game = new Game();


// main entry point
function playGame() {
    //*********************************ADD CODE HERE *************************************/
    // Call the function game.newGame() to reset the counts.
    game.newGame();

    //*********************************ADD CODE HERE *************************************/
    // Get the number of rounds from the user, and store it in a variable called numberOfRounds.
    // Use game.IsNumerOfRoundsValid() to validate the user input.
    // If the input is valid, use game.setNumberOfRounds(numberOfRounds) to set the number of rounds for the game 
    //  >> Else, try to get the number of rounds for the suer again
    let numberOfRounds;
    let isValidNumberOfRounds;
    do
    {
        numberOfRounds = prompt("How many rounds shall we play, User?\nThou mayest choose between 1 and 5.\nInclusively.");
        isValidNumberOfRounds = game.isNumberOfRoundsValid(numberOfRounds);
    } while (isValidNumberOfRounds === false)

    //*********************************ADD CODE HERE *************************************/
    // Call playRound() numberOfRounds times of with a parameter of the current round
    for (let i = 1; i <= numberOfRounds; i++)
        playRound(i);

    //*********************************ADD CODE HERE *************************************/
    // Display the Final Score from the properties stored in the Game object
    console.log(">>Final Score<<");
    console.log("User Wins:", game.countOfPlayerWins);
    console.log("Computer Wins:", game.countOfComputerWins);
    console.log("Ties:", game.countOfTies);
}

/**
 * play a round of rock paper scissors
 * @param {*} roundNumber
 */
function playRound(roundNumber) {
    //*********************************ADD CODE HERE *************************************/
    // Display the Current Score to the User
    console.log("--Current Score--");
    console.log("User Wins:", game.countOfPlayerWins);
    console.log("Computer Wins:", game.countOfComputerWins);
    console.log("Ties:", game.countOfTies);

    
    //Prompt for Player Selection
    var playerSelection = getPlayerSelection();
    var round = new Round(playerSelection);

    //Play the Round
    var outcome = round.determineWinner();

    switch (outcome)
    {
        case Outcomes.PLAYER_WINS:
            game.incrementPlayerWins();
            break;
        case Outcomes.TIE:
            game.incrementCountOfTies();
            break;
        case Outcomes.COMPUTER_WINS:
            game.incrementComputerWins();
            break;
        default:
            console.log("Unanticipated outcome of match.");
    }

    //*********************************ADD CODE HERE *************************************/
    // Display the Round Results from the properties stored in the Round object
    console.log("~~Round", roundNumber, "Results~~");
    console.log("User chose:", round.playerSelection);
    console.log("Computer chose:", round.computerSelection);
    console.log("Our esteemed winner is", (outcome !== Outcomes.TIE ? outcome : "yet to be found, because it's a tie"));
}



/**
 * prompt the user to get a selection
 * @returns Selections
 */
function getPlayerSelection() {
    
    //*********************************ADD CODE HERE *************************************/
    // Prompt, Validate and Return the player selection. This must be in the form of "rock", "paper", or "scissors" exactly
    const selectionInterpretations =
                                {
                                    R: Selections.ROCK,
                                    ROCK: Selections.ROCK,
                                    STONE: Selections.ROCK,
                                    P: Selections.PAPER,
                                    PAPER: Selections.PAPER,
                                    PAPYRUS: Selections.PAPER,
                                    S: Selections.SCISSORS,
                                    SCISSORS: Selections.SCISSORS,
                                    SCISSOR: Selections.SCISSORS
                                };
    let playerSelection;
    let isValidPlayerSelection;
    do
    {
        playerSelection = prompt("Chooseth you rock, paper, or scissors?").toUpperCase();
        isValidPlayerSelection = selectionInterpretations.hasOwnProperty(playerSelection);
    } while(isValidPlayerSelection == false)

    return selectionInterpretations[playerSelection];
}