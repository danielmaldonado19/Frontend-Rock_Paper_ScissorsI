/*1.Capture the span elms regarding to computer & user choice. The same has to be done with result.*/

const computerChoiceDisplay = document.getElementById('computer-choice').innerHTML;
const userChoiceDisplay = document.getElementById('user-choice');

const resultDisplay = document.getElementById('result');


//2.Get all the possible options.

const possibleOptions = document.querySelectorAll('button');
/*.querySelectorAll returns the class/element we called as the param of the method.*/


//3. Activate the btns for the user click its choice and display it into the h2.

let userChoice;

possibleOptions.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    console.log(e.target)
    userChoiceDisplay.innerHTML = userChoice
}))
/*for each one of the elements of the list possibleOptions it triggers a fn -> possibleChoice param contain the btn and when we click any of the 3 btns it activates a fn which creates a pointer event (its an object) named e (automatically created by JS) -> the fn stores in userChoice let the str (given by e.target.id) of the btn we clicked.-> Then show the id of the btn we clicked in the h2 of the user.
*/