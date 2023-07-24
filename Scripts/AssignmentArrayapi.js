// Check other API functions of an Array and implement those

// The Array object is used to store multiple values in a single variable.

// The concat() method concatenates (joins) two or more arrays.
// The concat() method returns a new array, containing the joined arrays.
// The concat() method does not change the existing arrays.

let concatMethod = ['fruits', 'vegetables', 'salads' , 'fast-food'];
let concatMethod1 = ['pizza', 'burger'];
let concatMethod2 = [[25], [23, 34]];

// let food = concatMethod.concat(concatMethod1);
let food = concatMethod.concat(concatMethod1, concatMethod2);
console.log(food);
document.write('<b>concat array method:</b>' + food);
