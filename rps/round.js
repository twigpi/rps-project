// Enum of Selections
const Selections = {
    ROCK: "rock",
    PAPER: "paper",
    SCISSORS: "scissors",
};
Object.freeze(Selections);

// Enum of Outcomes
const Outcomes = {
    PLAYER_WINS: "player",
    COMPUTER_WINS: "computer",
    TIE: "tie",
};
Object.freeze(Outcomes);


class Round{

    constructor(playerSelection){
        this.playerSelection = playerSelection;
        this.computerSelection = this.getComputerSelection();
    }

    /**
     * get a random computer selection
     * @returns Selections
     */
     getComputerSelection() {
        //*********************************ADD CODE HERE *************************************/
        // Use Math.floor and select a random Selections enumerator from above 
        let randomIndex = Math.floor(Math.random() * 3);
        let computerSelection;
        switch (randomIndex)
        {
            case 0:
                computerSelection = Selections.PAPER;
                break;
            case 1:
                computerSelection = Selections.ROCK;
                break;
            case 2:
                computerSelection = Selections.SCISSORS;
                break;
            default:
                console.log("Unknown case for computerSelection");
        }

        this.computerSelection = computerSelection;
        
        return computerSelection;
    }

    /**
     * determine the winner of the round
     * @param {*} playerSelection
     * @param {*} computerSelection
     * @returns Outcomes
     */
    determineWinner() {
        //*********************************ADD CODE HERE *************************************/
        // Use this.playerSelection and this.computerSelection to return the appropriate outcome from the Outcomes enumerator above.
        let playerWins = (this.playerSelection === Selections.ROCK && this.computerSelection === Selections.SCISSORS)
                      || (this.playerSelection === Selections.PAPER && this.computerSelection === Selections.ROCK)
                      || (this.playerSelection === Selections.SCISSORS && this.computerSelection === Selections.PAPER);
        let winningOutcome;
        if (playerWins)
            winningOutcome = Outcomes.PLAYER_WINS;
        else if (this.playerSelection === this.computerSelection)
            winningOutcome = Outcomes.TIE;
        else
            winningOutcome = Outcomes.COMPUTER_WINS;

        return winningOutcome;
    }



}


//DO NOT TOUCH THIS LINE OF CODE//
let unit_test1 = Round;