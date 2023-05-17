console.log("*******1.Square of the number********");
var square = function (one, two) {
    var result = one*two;
    return `Square of the number 5  is: ${result}`;
}
var result = square(5, 5 );
console.log(result);
var square = function (one, two) {
    var result = one*two;
    return `Square of the number 6 is: ${result}`;
}
var result = square(6, 6 );
console.log(result);
var square = function (one, two) {
    var result = one*two;
    return `Square of the number 25  is: ${result}`;
}
var result = square(25, 25 );
console.log(result);
var square = function (one, two) {
    var result = one*two;
    return `Square of the number 100  is: ${result}`;
}
var result = square(100, 100 );
console.log(result);


console.log("------------2. Type of variables--------------------");
console.log("type of square is : Function");
console.log("----------------------3. Area of rectangle---------------------");
var rectangle = function(one, two){
    var result = one*two;
    return`The area of rectangle is : ${result}`;
}
var result = rectangle (499,  917);
console.log(result);

console.log("------------4.Swap variables------------------");
var a = "virat";
var b = "Anushka";

function swapVariables( a, b){
    console.log("Before swap:",  a,  b );
    var temp = a;
    var a = b;
    var b = temp;
    console.log("After Swap:", a, b);

}
swapVariables( a, b); 
swapVariables( a, b);


var a = 1000;
var b = 2000; 
function swapVariables( a, b){
    console.log("Before swap:",  a,  b );
    var temp = a;
    var a = b;
    var b = temp;
    console.log("After Swap:", a, b);

}
swapVariables( a, b); 

console.log("------------.String---------------");
console.log("String : JS the most popular language of internet ");
var string = "JS the most popular language of internet";
var resultLength = string.length;
console.log("String Length:", resultLength);
var sliceResult = string.slice(6,6);
console.log("The character at index 6 :", sliceResult);
var sliceResult = string.slice(11,11);
console.log("The character at index 11 :", sliceResult);
var charAtLastIndex = string.charAt(string.length-1);
console.log("The character at last is: ", charAtLastIndex);
var charAtZeroIndex = string.charAt(0);
console.log("the character at First is :", charAtZeroIndex);

var string = "JS the most popular language of internet";
var resultSplit = string.split(" ");
console.log(resultSplit);
console.log(` Total number of words ${resultSplit.length} `);
var square = function (one, two) {
    var result = one*two;
    return `Square of total number of words is: ${result}`;
}
var result = square(7, 7 );
console.log(result);
