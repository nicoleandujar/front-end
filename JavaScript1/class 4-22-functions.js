// FUNCTIONS
// think of functions as recipes
// BASICS OF A FUNCTION
// make name of the function reflect what it's doing

//-----------------------------------------------------------------------

// function catSpeak() {
//   alert("Meow");
//   alert("Hiss!");
// }

// catSpeak(); // calling function here

// --------------------

// function catSpeak(vocals) { // parameter is what funciton expects
//   alert(vocals);
// }
//
// catSpeak("Miau!");  // argument in parentheses

// ----------------------
function catSpeak(vocals) { // parameter is what funciton expects
  var specialMeow = vocals.toUpperCase();
  alert(specialMeow);
}

catSpeak("Miau!");  // argument in parentheses


// 1. call catspeak, giving an argument of "Miau!"
// 2. function is executed
// 3. "Miau!" is turned into all caps and stored in variable specialMeow
// 4. alert appears all caps MIAU!


function catSpeak(vocals) { // parameter is what funciton expects
  var specialMeow = vocals.toUpperCase();
  alert(specialMeow);
}

catSpeak("Chirp!");  // argument in parentheses

//-----------------------------------------------------------------------

// Capitalize
// Write a function
// Function will need a parameter (what's in parentheses)
// Assume only one word at a time
// Find the first letter of that word
// Once first letter is found, capitalize it

// for example the word special
// when you split a word, it becomes an array
// s  pecial
// ["s", "pecial"]

// var array = ["s", "pecial"]
// array[0].toUpperCase();  toUpperCase is a method - it's a function alrea

//-----------------------------------------------------------------------

// PEANUT BUTTER JELLY Recipe
// We don't want to write the recipe all the time so we will write a function
//  - create a function
//  - need parameters (bread, pbj, jelly)

// bread, spread flavor PBJ on one side, spread flavor jelly on other side,
// and smush together


// var typeOfBread = window.prompt("Please enter your favorite bread for a PBJ sandwich");
//
// var typeOfPB = window.prompt()


function pbjMaker(typeOfBread, typeOfPB, typeOfJelly) {
  var string = "I made a sandwich with ";
  string += typeOfBread + " bread, and "
  string += typeOfPB + " peanut butter and "
  string += typeOfJelly + " jelly!";

  // return string;  use this if you only want to call
  console.log(string);
}

// var erin = pbjMaker("white", "creamy", "strawberry");
// console.log(pbjMaker("white", "creamy", "strawberry"));

pbjMaker("white", "creamy", "strawberry");
pbjMaker("sourdough", "crunchy", "blueberry");
pbjMaker("honey wheat", "crunchy", "fig");
pbjMaker("white", "chunky & salty", "strawberry reserves");



// I made a sandwich with (typeOfBread) bread, and (typeOfPB) peanut butter, and (typeOfJelly) jelly!
