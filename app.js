/*1.Capture the span elms regarding to computer & user choice. The same has to be done with result.*/

const computerChoice = document.getElementById('computer-choice').innerHTML;
const userChoice = document.getElementById('user-choice');

const resultDisplay = document.getElementById('result');


//2.Get all the possible options.

const possibleOptions = document.querySelectorAll('button');
/*.querySelectorAll returns the class/element we called as the param of the method.*/