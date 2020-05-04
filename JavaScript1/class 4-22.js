var pets = ["cat", "dog", "fish", "giraffe", "elephant", "lion", "jaguar"]; // 7 items
// pets[0]
// pets[1]
// pets[2]
// what if there is an array of 1000 pets

// FOR loops
// for(var counter = 0; counter <= 2; counter++) { /* steps 1; 2; 4 */
// 	 console.log(counter); /* step 3 */
// }

//0
//1
//2

// 0 <=2 ; true ; runs
// counter = 1
// 1 <=2 true!
// counter = 2
// 2 <=2 true!
//counter = 3
// 3 <=2 false!

// for (var i = 0; i <= 2; i++) {
//   console.log(i);
// }

// for (var i = 0; i <= 3; i++ ) {
//     console.log(pets[i]);
// }

//console.log(pets[0]) = true! prints cat
//console.log(pets[1]) = true! prints dog
//console.log(pets[2]) = true! prints fish

// for (var i = 0; i < pets.length; i++ ) {
//     console.log(pets[i]);
// }

//pets.length will tell you how many items are in the array pets
// loops here becomes less than < because you want to count all items in array


//WHILE loops
var i = 0; /* step 1 */

pets.length

while(i < pets.length) { /* step 2 */
  console.log(pets[i]);  /* step 3 */
  i++; /* step 4 */
}
