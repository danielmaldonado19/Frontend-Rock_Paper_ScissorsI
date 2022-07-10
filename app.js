/*1.Capture the span elms regarding to computer & user choice. The same has to be done with result.*/

const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');

const resultDisplay = document.getElementById('result');


//2.Get all the possible options.

const possibleOptions = document.querySelectorAll('button');
/*.querySelectorAll returns the class/element we called as the param of the method.*/


//3. Activate the btns for the user click its choice and display it into the h2.

let userChoice;

possibleOptions.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    /*for each one of the elements of the list possibleOptions it triggers a fn -> possibleChoice param contain the btn and when we click any of the 3 btns it activates a fn which creates a pointer event (its an object) named e (automatically created by JS) -> the fn stores in userChoice let the str (given by e.target.id) of the btn we clicked.-> Then show the id of the btn we clicked in the h2 of the user.*/

    //4.Generate the computer choice.
    generateComputerChoice();


    //5.
    getResult();
    
}))


//4.

let computerChoice;

function generateComputerChoice() {
    const randomNumber = Math.ceil(Math.random() * possibleOptions.length); //3 options.
    
    if(randomNumber === 1){
        computerChoice = 'rock';
    }
    else if(randomNumber === 2){
        computerChoice = 'papper';
    }
    else if(randomNumber === 3){
        computerChoice = 'scissors';
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}


//5.Set up the result fn.

let result;

function getResult(){
    if(computerChoice === userChoice) {
        result = 'Its a draw!';
    }

    else if(computerChoice === 'rock') {
        if(userChoice === 'papper') {
            result = 'You won!';
        }
        else if(userChoice === 'scissors') {
            result = 'You lost!';
        }
    }

    else if(computerChoice === 'papper') {
        if(userChoice === 'scissors') {
            result = 'You won!';
        }
        else if(userChoice === 'rock') {
            result = 'You lost!';
        }
    }

    else if(computerChoice === 'scissors') {
        if(userChoice === 'rock') {
            result = 'You won!';
        }
        else if(userChoice === 'papper') {
            result = 'You lost!';
        }
    }
    
    return resultDisplay.innerHTML = result;
}