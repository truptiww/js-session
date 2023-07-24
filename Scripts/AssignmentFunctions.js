// salary array Functions

function salary(...sal) {
  console.log(sal); //showing array

  let ctc = 0; //temporary varible storage

  for (let i = 0; i < sal.length; i++) {
    if (ctc < sal[i]) {
      // only checking true or false or valid/invalid
      ctc = sal[i];
    }
  }
  console.log(ctc);

  return ctc;
}

let salResult = salary(1000, 500, 2000, 4000, 4);
console.log(salResult);
document.write('Higest salary is ' + salResult);
document.write('<br/>');

// 2nd
let names = ['Prashant', 'Vipin', 'Priyank', 'Trupti']; //array
let nameResult = nameStartWithP(names); //calling in function passing argument and storing it in variable
document.write('Names start with p ' + nameResult);
document.write('<br/>');

function nameStartWithP(nameArray) {
  //nameAraay is known as a parameter(it can be a any name/you can use any word)
  //function
  let resultName = []; //temporary varible storage
  // let regex = /^p/
  for (let i = 0; i < nameArray.length; i++) {
    if (nameArray[i].toLowerCase().startsWith('p')) {
      resultName.push(nameArray[i]);
    }
    // if(regex.test(nameArray[i].toLowerCase())){
    //   resultName.push(nameArray[i]);
    // }
  }
  return resultName;
}

// 4th

let age = [5, 7, 3, 4]; //array
let ageOld = doubledAge(age);
document.write('Years are ' + ageOld);

function doubledAge(ageArray) {
  let age = [];

  for (j = 0; j < ageArray.length; j++) {
    age.push(2 * ageArray[j]);
  }
  return age;
}

// 1. consider age array [3,56,12,18,34,16,35,12,19,18]
// make sum of only those ages which are valid for voting (age >=18)
let ageNum = [3, 56, 12, 18, 34, 16, 35, 12, 19, 18];
console.log(ageNum);

let ageNumArray = ageNum
  .filter((age) => age >= 18)
  .reduce((acc, age) => acc + age); //filter
console.log(ageNumArray);

// let sumofagesnum = ageNumArray.reduce((acc, age) => acc + age); //reduce
// console.log(sumofagesnum);
document.write('<br/>');
// document.write(
//   'sum of ages which are greater than 18 years old:' + sumofagesnum
// );

// 2. Consider number array [2,3,5,2,3,6]
// make sum of square of above numbers

let sqNum = [2, 3, 5, 2, 3, 6];
console.log(sqNum);

let sqNumArray = sqNum.map((squ) => Math.pow(squ, 2));
console.log(sqNumArray);

let sumofsqnum = sqNumArray.reduce((acc, squ) => acc + squ);
console.log(sumofsqnum);
document.write('<br/>');
document.write('sum of square num are: ' + sumofsqnum);
