// find greatest sallary
function greatestSal(ar) {
  let greater = ar[0];

  for (let ele of ar) {
    if (ele > greater) greater = ele;
  }

  return greater;
}

let salaryArray = [19000, 67000, 34000, 89000, 56000, 54000, 23000]; //6 7-1
let gt = greatestSal(salaryArray);
console.log(gt);

//normal for loop

for (let i = 0; i <= salaryArray.length - 1; i++) {
  console.log(i + '' + salaryArray[i]);
}

console.log('Backward.....');
for (let i = salaryArray.length - 1; i >= 0; i--)
  console.log(i + '  ' + salaryArray[i]);
console.log('Alternate....');
for (let i = 0; i <= salaryArray.length - 1; i += 2)
  console.log(i + '  ' + salaryArray[i]);
console.log('Start....');
for (let i = 3; i <= salaryArray.length - 1; i++)
  console.log(i + '  ' + salaryArray[i]);

console.log('for of loop');
// doest not take index value, bydefault starts with 0
//bydefault ends at end index
//only in fwd direction

for (let j of salaryArray) console.log(j);
console.log('Test logic...');
for (let salary of salaryArray) console.log(salary);
// scope of salary variable ended
//  console.log(salary+5000); // error

// what will be the ouput of above code
console.log('Test logic...');
for (let salary of salaryArray) {
  console.log(salary);
  console.log(salary + 5000);
}

//forEach method
console.log('forEach....');
salaryArray.forEach((sl) => console.log(sl));

console.log('forEach....');
salaryArray.forEach((sal, index) => console.log(sal + '   ' + index));

console.log('forEach....');
salaryArray.forEach((sal, index, ar) =>
  console.log(sal + '   ' + index + '  ' + ar)
);

// find
console.log('find.....');
salaryArray = [19000, 67000, 34000, 89000, 56000, 54000, 23000];
// find 1st salary which is greater than 50000
let resultSal = salaryArray.find((sal) => sal > 50000); // returns single value as a result
console.log(resultSal);

let resultSalaries = salaryArray.filter((sal) => sal > 50000); // array as a result
console.log(resultSalaries);

console.log('Name filter.....');
let nameArray = [
  'Hari',
  'Pari',
  'Pavan',
  'pooja',
  'kiran',
  'Kumar',
  'Sanavi',
  'Pritam',
];

let nameswithP = nameArray.filter((name) => name.toLowerCase().startsWith('p'));
console.log(nameswithP);

console.log('Name find.....');
let namewithP = nameArray.find((name) => name.toLowerCase().startsWith('p'));
console.log(namewithP);

console.log('largest sal.....');
let largestSal = Math.max(67890, 34222, 45000, 89000);
console.log(largestSal);

let smallestSal = Math.min(...salaryArray);
console.log(smallestSal);

console.log('map...');
let ageArray = [1, 2, 3, 4, 5, 6];

let mappedArray = ageArray.map((age) => age * 2);

console.log(ageArray);
console.log(mappedArray);

console.log('sum of array elements: reduce');

let sumofages = mappedArray.reduce((acc, age) => acc + age); //accumulator - initial value 0
console.log(sumofages);
let sumofages1 = ageArray.reduce((acc, age) => acc + age);
console.log(sumofages1);

// extra 10 should be added in sum of array elements
// acc=10 (initital value)
let initialValue = 20;
let sumofages2 = ageArray.reduce((acc, age) => acc + age, initialValue);
console.log(sumofages2);

console.log('reduce.....');
salaryArray = [19000, 67000, 34000, 89000, 56000, 54000, 23000];
let resultSal1 = salaryArray.reduce((acc, sal) => {
  if (sal > acc) acc = sal;
  return acc;
});
console.log(resultSal1);

nameArray = [
  'Hari',
  'Pari',
  'Pavan',
  'pooja',
  'kiran',
  'Kumar',
  'Sanavi',
  'Pritam',
];
let contactValue = nameArray.reduce((acc, name) => acc + name);
console.log(contactValue);

nameArray.push('Prabhu');
console.log(nameArray);
let lastele = nameArray.pop(); //LIFO // delete last elements, we can not delete it with index
console.log(lastele);
console.log(nameArray);
let sliceArray = nameArray.slice(0, 4);
console.log(sliceArray);

let newArray = nameArray.splice(5, 1); // delete the elements from particular index and returns deleted elements as new array
//original array now will be changed
console.log(newArray); // deleted elements
console.log(nameArray); // changed array after deleting elements
