// --------------------------------------
// Arrays, for loops
// --------------------------------------
// Exercise 1 - Array Positioning

const letters = ["a", "b", "c"];
// show b in the console 

console.log(letters[1]);


// --------------------------------------
// Exercise 2 - Array Positioning

const friends = [];

// What a lonely array. Add at least 3 friend objects to it. 

const friend1 = {name: "Lasse", age: 17, city: "Copenhagen"}
const friend2 = {name: "Rio", age: 19, city: "Copenhagen"}
const friend3 = {name: "Louis", age: 20, city: "Copenhagen"}

friends.push(friend1, friend2, friend3);

console.log(friends);


// --------------------------------------
// Exercise 3 - Get the index of first occurance of that value. 

const significantMathNumbers = [0, 2.718, 3.14159, 1729];

// You want to programmatically find where the number 1729 is in the array.
// programmatically means that no finger counting allowed. There is a method for this (finding index based of value). 

const index = significantMathNumbers.findIndex(value => value === 1729);

console.log(`The required indexNo is: ${index}`);

//prøver lige at lege med at medtage flere parametre i callback funktion
const newIndexToBeFound = significantMathNumbers.findIndex( (value, index) => {
    console.log("Value:", value, "Index:", index);
    return value === 3.14159;
});

console.log("Result: ", newIndexToBeFound);


// --------------------------------------
// Exercise 4 - Inserting elements

const diet = ["tomato", "cucumber", "rocket"];

// You are a programmer. In one line (one statement) insert hamburger, soda and pizza between the elements cucumber and rocket

diet.splice(1,0,"hamburger", "soda","pizza");
console.log(diet);

//leg med splice af to arrays med spread array ...

const array1 = ["tomato", "cucumber", "rocket"];
const extraToArray = ["hamburger", "soda","pizza"];

array1.splice(1,0,...extraToArray); //...spread er så elementerne læses enkeltvis og ikke som samlet array

console.log(array1);


// --------------------------------------
// Exercise 5 - Remove element

// Remove the LAST element of the array.
// Don't remove by index. You know in advance that it's the last in the array because you are too full already. 

const removedItem = array1.pop();  //fjerner sidste element i array, og returnerer denne
console.log(`Item which is removed: `, removedItem);
console.log(`Array1 after removing last item: `, array1);


// --------------------------------------
// Exercise 6 - Copy array

// You really like your daily diet from last exercise. Copy it to a new array called dinnerTray so you can give it to a friend.  

const dinnerTray = diet.flat();
console.log(dinnerTray);


// --------------------------------------
// Exercise 7 - For loop

const lettersExpanded = ["a", "b", "c", "d", "e", "f", "g", "h"];

// log every second char in the array starting from b

let everySecondChar = "";

for(let i = 1; i < lettersExpanded.length; i+=2) {
    let char = lettersExpanded[i];  
    everySecondChar+=char;
}

console.log(everySecondChar);




// --------------------------------------
// Exercise 8 - For loop and if statement

const numbers = [5, 3, 2, 7, 11, 12, 0, -20, 6];

const discardedNumbers = [];

// log the element if the number is above 6 or below 0
// else push them to the array discardedNumbers

numbers.forEach(value => {
    if(value > 6 || value < 0){
        console.log(value);
    } else {
        discardedNumbers.push(value);
    }
});

console.log(discardedNumbers);


// --------------------------------------


