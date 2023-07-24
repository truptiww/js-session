// normal functions : named functions
// annoymous functions : no named functions
// arrow functions : compact annonymous functions

function addFunc() {
  let num1 = 42;
  let num2 = 50;
  let result = num1 + num2;
  console.log('result is :' + result);
}

addFunc();

function addFunc1(num1, num2) {
  console.log(num1);
  console.log(num2);
  let result = num1 + num2;
  console.log('result is :' + result);
}

// function addFunc1() {
//   console.log('addFunc1 with no arguments');
// }

// addFunc1();
addFunc1(25);
addFunc1(41, 85);

let arr = [12, 'Hello', true, 123];
console.log(arr);
let arr1 = [1, 465, 56, 34, 56];

let arr2 = arr1; //arr2 is refering to arr1
console.log(arr2);

let arr3 = [...arr1]; //creating new array as arr3 by taking value of arr1
console.log(arr3);

arr1.push(50); //it will push new value to  array - adding new value to arr1
console.log(arr1); //showing array with new added value/new push value
console.log(arr2); //as this is reference to arr1 it is showing new value
console.log(arr3); //it is showing previous value of arr1 as we copied arr1 value into this before pushing new number

let newArray = [...arr1, ...arr3]; //showing two arrays arr1 & arr3 together in one new array
console.log(newArray);

//  var type variables declared anywhere inside function,  always have functional scope
// let type variables delclared inside function, always have block scope where they are declared

function newFunc(...ar) {
  //for multiple numbers
  console.log(ar);

  let sum = 0;

  for (let i = 0; i < ar.length; i++) {
    sum = sum + ar[i];
  } //scope of i ends here
  // console.log("i="+i); //Uncaught ReferenceError: i is not defined
  // now replace let i with var i and see the difference
  return sum;
} //scope of sum ends here

let result1 = newFunc();
console.log('the result is ' + result1);

let result2 = newFunc(24);
console.log('the result is ' + result2);

let result3 = newFunc(24, 23, 56, 43);
console.log('the result is ' + result3);

// annonymous function

let annonymousFun = function (...arr) {
  let diff = arr[0];

  for (let i = 0; i < arr.length; i++) {
    diff = diff - arr[i];
  }

  return diff;
};

let resdiff = annonymousFun(23, 20);
document.write(resdiff + '<br>');
let resdiff1 = annonymousFun(23, 20, 45, 67);
document.write(resdiff1 + '<br>');

// annonymous function
let cubeFun = function (ele) {
  console.log('Element is :' + ele);
  console.log('Cube is :' + ele * ele * ele);
};
// no name, no functon keyword, fat arrow => between parenthesis and body

let arrowFun1 = (ele) => {
  console.log('Element is :' + ele);
  console.log('Cube is :' + ele * ele * ele);
};

// if arrow function accepts only one parameter then () are optional

arrowFun1 = (ele) => {
  console.log('Element is :' + ele);
  console.log('Cube is :' + ele * ele * ele);
};

//if arrow function has single statement in body then {} are optional
arrowFun1 = (ele) => console.log('Cube is :' + ele * ele * ele);

// if arrow function has single return statement in body then {} are optional and return keyword must not be used
// body automatically returns the result

arrowFun1 = (ele) => {
  return ele * ele * ele;
};

arrowFun1 = (ele) => ele * ele * ele;

let cubeResult = arrowFun1(3);
console.log('Cube is:' + cubeResult);
