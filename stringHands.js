
function stringHandsOn() {
    
        
}
stringHandsOn;
console.log("1.The string is :", string);
var string = "Hey you are doing good, keep it up  ";
var resultLength = string.length;
console.log("2.the string is:", resultLength);

var trimmedstring = string.trim();
var lengthAfterTrim = trimmedstring.length;
console.log("3.The total number of extra spaces:", resultLength-lengthAfterTrim);
console.log("4.After remove Leading and Trailing Extra Spaces length is:", trimmedstring.length);
var string = "Hey you are doing good , keep it up";
charAtZeroIndex = string.charAt(0);
charAtLastIndex = string.charAt(string.length-1);
console.log ("5.First and Last character of given string after remove extra spaces:", charAtZeroIndex, charAtLastIndex);
console.log("6.The count of total words availabel in string:", trimmedstring.length);
var sliceResult = string.slice(18, 22);
console.log("7'result of slice:", sliceResult);
var sliceResult = string.slice(22);
console.log("8.slice Result after 22:", sliceResult);
var string = "Hey you are doing good , keep it up";
var includeResult = string.includes("up");
console.log("9.the string end with up:", includeResult);
var string = "Hey you are doing good , keep it up";
var includeResult = string.includes("Hey");
console.log("10.the string start with Hey:", includeResult);
console.log("11.The length of string is:", trimmedstring.length);


