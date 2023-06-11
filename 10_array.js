

var arrayOfRollNumbers = [67, 56, 78, 90, 60, 90, 40];
console.log(`Type of array: ${typeof arrayOfRollNumbers}`);

let lengthOfArray = arrayOfRollNumbers.length;
console.log(`Length of array is : ${lengthOfArray}`);

// Accessing array element
const zerothIndexValue = arrayOfRollNumbers[0];
console.log(`Zeroth index value: ${zerothIndexValue}`);

// Access the array element 90
const thirdIndexValue = arrayOfRollNumbers[3];
console.log(`Third index value: ${thirdIndexValue}`);

// Accessing last element
let arrayLength = arrayOfRollNumbers.length;
const lastElement = arrayOfRollNumbers[arrayLength-1];
console.log(`Last element: ${lastElement}`);

//Adding element in last position
arrayOfRollNumbers.push(80);
console.log(arrayOfRollNumbers);

//Adding element in first position
arrayOfRollNumbers.unshift(80);
console.log(arrayOfRollNumbers);

//removing last element
arrayOfRollNumbers.pop();
console.log(arrayOfRollNumbers);


//removing first element
arrayOfRollNumbers.shift();
console.log(arrayOfRollNumbers);


console.log("===================================================================================");

var arrayOfRollNumbers = [67, 56, 78, 90, 60, 90, 40];
//update array element
console.log("update array element");
arrayOfRollNumbers[0] = 888;
console.log(arrayOfRollNumbers);

//Update the last element 40 with 77
arrayOfRollNumbers[arrayOfRollNumbers.length - 1]= 77
console.log(arrayOfRollNumbers);

let str = "The Kerala Story is the good movie";
let words = str.split(" ");

console.log(words);

console.log("=======================================================");

//slice
var arrayOfRollNumbers = [67, 56, 78, 90, 60, 90, 40];
const sliceArray = arrayOfRollNumbers.slice(3);
console.log(sliceArray);

console.log("splice");

var arrayOfRollNumbers = [67, 56, 78, 90, 60, 90, 40];
const spliceArray = arrayOfRollNumbers.splice(3);
console.log(spliceArray);

// splice for inseration
var arrayOfRollNumbers = [67, 56, 78, 90, 60, 90, 40];
arrayOfRollNumbers.splice(2, 0,666,444);
console.log(arrayOfRollNumbers);

//splice for insertion sby replacing element
var arrayOfRollNumbers = [67, 56, 78, 90, 60, 90, 40];
arrayOfRollNumbers.splice(1, 1, 99, 88, 77, 66);
console.log(arrayOfRollNumbers);