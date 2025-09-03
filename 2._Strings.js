// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

const numberOneFloat = Number.parseFloat(numberOne);
const numberTwoFloat = Number.parseFloat(numberTwo);
const solutionExerciseThree = numberOneFloat+numberTwoFloat;

console.log(`numberOne as float: ${numberOneFloat}`);
console.log(`numberTwo as float: ${numberTwoFloat}`);
console.log(`The solution is: ${solutionExerciseThree}`);



// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const anotherNumberOneFloat = Number.parseFloat(anotherNumberOne);
const anotherNumberTwoFloat = Number.parseFloat(anotherNumberTwo);
const solutionExerciseFour = (anotherNumberOneFloat+anotherNumberTwoFloat).toFixed(2);

console.log(`anotherNumberOne as float: ${anotherNumberOneFloat.toFixed(2)}`);
console.log(`anotherNumberTwo as float: ${anotherNumberTwoFloat.toFixed(2)}`);
console.log(`The solution is: ${solutionExerciseFour}`);


// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

const sum = one+two+three;
const solutionExerciseFive = (sum/2).toFixed(5);

console.log(`Total sum: ${sum}`);
console.log(`Average with five dec: ${solutionExerciseFive}`);

// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"

console.log("Requested character:" , letters[2]);




// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

const solutionExerciseSeven = fact.replace("j","J");
console.log(solutionExerciseSeven);


// --------------------------------------



