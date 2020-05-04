

var number1 = window.prompt("Enter a number:");
var number2 = window.prompt("Enter another number:");

function add(number1, number2) {
  var sumAll = parseInt(number1) + parseInt(number2);
return("The sum of " + number1 + " and " + number2 + " is " + sumAll + ".");
}


console.log(sumAll);
//
// ////EXAMPLE FROM https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
//
// function foo(i) {
//   if (i < 0)
//     return;
//   console.log('begin: ' + i);
//   foo(i - 1);
//   console.log('end: ' + i);
// }
// foo(3);
//
//
