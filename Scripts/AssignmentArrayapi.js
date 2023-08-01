// Check other API functions of an Array and implement those

// The Array object is used to store multiple values in a single variable.
// An array is an object that can store multiple values at once

// creating array using array litral []

const array1 = ['eat', 'sleep'];
console.log('creating array using array litral');
console.log(array1);
console.log('----------------------------');

const array2 = new Array('apple', 'banana');
console.log('Creating an array using new keyword');
console.log(array2);
console.log('----------------------------');

const myArray = ['h', 'e', 'l', 'l', 'o'];
console.log('access elements of an array using indices');
console.log(myArray);
// first element
console.log('0 index is having h text');
console.log(myArray[0]); // "h"
// second element
console.log('1 index is having e text');
console.log(myArray[1]); // "e"
console.log('----------------------------');

// built in methods
console.log('%c built-in method', 'font-size: 16px; font-weight: bold');
// Push() method
console.log('%c Add an Element to an Array - Push method', 'font-weight: bold');
let dailyActivities = ['eat', 'sleep'];
// add an element at the end
dailyActivities.push('exercise');
console.log(dailyActivities);
console.log('----------------------------');

// shift method
console.log(
  '%c Add an Element to an Array - unShift method',
  'font-weight: bold'
);
// add an element at the start
dailyActivities.unshift('work');
console.log(dailyActivities);
console.log('----------------------------');

//  add elements or change the elements by accessing the index value.
console.log(
  '%c add elements or change the elements by accessing the index value.',
  'font-weight: bold'
);
//['work', 'eat', 'sleep', 'exercise']; array
// this will add the new element 'medidate' at the 2 index
dailyActivities[2] = 'medidate';
console.log(dailyActivities);
console.log('----------------------------');

// if you try to add elements to high indices, the indices in between will have undefined value.
console.log(
  '%c  if you try to add elements to high indices, the indices in between will have undefined value.',
  'font-weight: bold'
);
//['work', 'eat', 'medidate', 'exercise']; array
dailyActivities[5] = 'run';
console.log(dailyActivities);
console.log('----------------------------');

//remove the last element from an array
console.log(
  '%c  remove the last element from an array - pop() method',
  'font-weight: bold'
);
//['work', 'eat', 'medidate', 'exercise', empty, 'run']; array
dailyActivities.pop();
console.log(dailyActivities); //['work', 'eat', 'medidate', 'exercise', empty]
const fruits = ['apple', 'banana', 'grapes'];
const removeElement = fruits.pop(); //to get the removed element
console.log(removeElement); //grapes
console.log(fruits); //['apple', 'banana'];
console.log('----------------------------');

//remove the first element from an array
console.log(
  '%c  remove the first element from an array - shift() method',
  'font-weight: bold'
);
//['work', 'eat', 'medidate', 'exercise', empty] array
dailyActivities.shift(); //removed first element i.e work
console.log(dailyActivities); //['eat', 'medidate', 'exercise', empty]
const removeFirstElement = dailyActivities.shift(); //to get the removed element
console.log(removeFirstElement); //eat
console.log(dailyActivities); //returns array ['medidate', 'exercise', empty]

const removeFruit = fruits.shift();
console.log(removeFruit); // apple
console.log(fruits); // ["banana"]
console.log(fruits.length);
console.log(dailyActivities.length);

//The concat() method returns a new array by merging two or more values/arrays.
console.log(
  '%c  concat() method to join two or more values/arrays',
  'font-weight: bold'
);

let primeNumbers = [2, 3, 5, 7];
let evenNumbers = [2, 4, 6, 8, 10];
let oddNumbers = [1, 3, 5, 7, 9];

let joinNumbers = primeNumbers.concat(oddNumbers, evenNumbers);
console.log(joinNumbers);

let fastFood = ['burger', 'pizza', 'frankie'];
let veg = ['cabbage'];

let food = fastFood.concat(veg);
console.log(food); // ['burger', 'pizza', 'frankie' ,'cabbage'];

fastFood[1] = 'fries';
console.log(fastFood); //['burger', 'fries', 'frankie'];
console.log(food); // ['burger', 'pizza', 'frankie' ,'cabbage'];

let numbers = [1, 2, 4];
let numbers1 = [5, 7, 8, [9, 10], [2, 4]];

numbers1[3] = 12;
console.log(numbers1); //[5, 7, 8, 12, [2, 4]];

let finalNumbers = numbers.concat(40, numbers1);
console.log(finalNumbers); //[1, 2, 4, 40, 5, 7, 8, 12, [2, 4]];
