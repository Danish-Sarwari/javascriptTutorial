/*
What is array ?
--> A pair of square backets [] represents a array in javascript.
    All the elements in the array are comma ',' seperated.
*/


const mixedTypedArray = [100, true, "freecodecamp", {}]

// console.log(mixedTypedArray);

// The position of an element in the array known as its 'Index'
// In javascript the array index start with 0 and it increases by one with each element

//accessing a each array element with index number
/*console.log(mixedTypedArray[0]);
console.log(mixedTypedArray[1]);
console.log(mixedTypedArray[2]);
console.log(mixedTypedArray[3]);*/

//checking type of each element in array
/*console.log(typeof(mixedTypedArray[0]));
console.log(typeof(mixedTypedArray[1]));
console.log(typeof(mixedTypedArray[2]));
console.log(typeof(mixedTypedArray[3]));*/


// there are three way to construct array

// 1. Array litrals
// The most straightforward way is by assigning an array value to a variable.
const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
console.log("salad:- ");
console.log(salad);

// 2. Array Constructor:-
// You can also use the Array constructor to create an array.
const new_salad = new Array('🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑');
console.log("new Salad:- ");
console.log(new_salad);

//Accessing a array using for loop

for (let i = 0; i < new_salad.length; i++) {
    // const element = new_salad[i];
    console.log(`element at index ${i} is ${salad[i]}`);
}

// How to add Element to an Array in js

// Use the push() method to insert an element into an array. The push() method adds an element at the end of the array. How about we add some peanuts to the salad, like this:

const salad_2 = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
salad_2.push('🥜')
console.log(salad_2);

 /*Note that the push() method adds an element to the end of the array. If you want to add an element to the beginning of the array, you'll need to use the unshift() method.*/

//How to Remove Elements from an Array in JS

/*The easiest way to remove a single element from an array is using the pop() method. Every time you call the pop() method, it removes an element from the end of the array. Then it returns the removed element and changes the original array.*/

const salad_3 = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑', '🥜'];
salad_3.pop()
console.log(salad_3);

/*Use the shift() method to remove an element from the beginning of an array. Like the pop() method, shift() returns the removed element and changes the original array.*/

