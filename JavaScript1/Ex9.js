var fruit = ['apple', 'banana', 'clementine']

console.log(fruit[0]) //returns apple
console.log(fruit[1]) //returns banana
console.log(fruit[2]) //returns clementine

var vegetables = new Array("asparagus", "broccoli", "carrot");

console.log(vegetables[0]) //returns asparagus
console.log(vegetables[1]) //returns broccoli
console.log(vegetables[2]) //returnscarrot

// Question 3

var number = parseInt(Math.random() * 100);
var emptyArray = new Array(number);

console.log(emptyArray.length);
console.log(number);


// Question 4


 var emptynewArray = new Array(number);

console.log(emptynewArray.length);
console.log(number);


// Question 5

var splicedArray = emptynewArray.splice(27, 7);
 console.log(number.length);

// could not continue this question so I commented it out

// Question 6

 var moreNumbers = [5, 7, 6, 8, 2, 1, 6, 8, 9, 0];
 console.log(moreNumbers);

//Question 7

 var newMoreNumbersArray = numbers.concat(moreNumbers);
 console.log(newMoreNumbersArray);


// Question 8

// again could not contiunue because numbers is not defined and
//I didn't understand what it was supposed to be defined at.


//Question 9

var animals =  ["Tiger", "Lion", "Panther", "Ocelot", "Jaguar"];
document.write("<p>" + animals + "</p>");


//Question 10
var topPets = ["fish", "cat", "dog", "elephant", "giraffe", "alligator", "bat"];

var topPets = [];

//Question 11
topPets[0] = "fish";
topPets[1] = "cat";
topPets[2] = "dog";
topPets[3] = "elephant";


topPets.push("giraffe");
topPets.push("alligator");
topPets.push("bat");


//Question 12
document.write("<p>" + topPets + "</p>");


//Question 13

var veggies = ["carrot", "eggplant", "apple", "banana"];
document.write("<p>" + veggies + "</p>");


//Question 14

var fewerVeggies = veggies.reverse().splice(1,1);
document.write("<p>" + fewerVeggies + "</p>");


//Question 15

var message = ["Como", "te", "va", "en", "la clase?"];
document.write("<p>" + message + "<p>");
console.log(message.join(' - '));
var newMessage = (message.join('-'));

document.write("<p>" + newMessage + "</p>");
document.write("<p>" + typeof newMessage + "</p>");

//Qestion 16

var threeNumbers = ["1", "2", "3"];
var threeMoreNumbers = ["4", "5", "6"];

var array3 = threeNumbers.concat(threeMoreNumbers).join(" - ");
document.write(array3);
