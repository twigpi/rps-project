class Game{
    constructor(){
        this.numberOfRounds = null;
        this.countOfPlayerWins = 0;
        this.countOfComputerWins = 0;
        this.countOfTies = 0;
    }
    incrementPlayerWins(){
        //*********************************ADD CODE HERE *************************************/
        // Add 1 to the countOfPlayerWins property
        this.countOfPlayerWins++;
        console.log("this.countOfPlayerWins:", this.countOfPlayerWins);
    }

    incrementComputerWins(){
        //*********************************ADD CODE HERE *************************************/
        // Add 1 to the countOfComputerWins property
        this.countOfComputerWins++;
    }

    incrementCountOfTies(){
        //*********************************ADD CODE HERE *************************************/
        // Add 1 to the countOfTies property
        this.countOfTies++;
    }


    setNumberOfRounds(numberOfRounds){
        //*********************************ADD CODE HERE *************************************/
        // Set the numberOfRounds property to the parameter
        if ( this.isNumberOfRoundsValid(numberOfRounds) )
            this.numberOfRounds = numberOfRounds;
        else
            this.numberOfRounds = 0;
    }

    newGame(){
        //*********************************ADD CODE HERE *************************************/
        // Clear all properties to their default values
        this.numberOfRounds = null;
        this.countOfPlayerWins = 0;
        this.countOfComputerWins = 0;
        this.countOfTies = 0;
    }

    /**
     * tests the numberOfRounds global variable and determines if it is a valid value
     * @returns boolean
     */
    isNumberOfRoundsValid(num) {
        //*********************************ADD CODE HERE *************************************/
        // return a boolean value that shows if the parameter is a valid user input (A number from 1 - 5)
        let isNumberValid = (1 <= num && num <= 5);

        return isNumberValid;
    }
}



// DO NOT TOUCH THIS CODE
let unit_test  = Game;