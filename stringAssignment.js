console.log("***************ASSIGNMENT 1*******************")
function stringBasics() {
    console.log("My dream company is: WIPRO");

}
stringBasics();
console.log("----------------------------------------------------------------------------------------------------");

var hobby1 = "Reading";
var hobby2 = "  Travling";
var hobby3 = "  Cooking";

var concatString = hobby1.concat(  hobby2,  hobby3);
console.log("My hobbies are:  ",  concatString);

var hobby1 = "Reading";
var hobby2 = "Travling";
var hobby3 = "Cooking";

var result = hobby1.length; 
var result = hobby2.length;
var result = hobby3.length;
console.log("The Total Number Of Character are:", result+result+result);

console.log("-------------------------------------------------------------------------")

console.log("**********************ASSIGNMENT 2***************************")

function stringHandsOn() {
    console.log("Given String as it is =     Hey you are doing good,  keep it up");

}
stringHandsOn();

var StringHandsOn = "     Hey you are doing good,  keep it up"
var resultLength = StringHandsOn.length;
console.log("Total length of the Given String is:", resultLength);

var trimmedstringHandsOn = StringHandsOn.trim();
var lengthAfterTrim = trimmedstringHandsOn.length;
console.log("After remove Leading and Trailing Extra Spaces length is:" , trimmedstringHandsOn.length);
console.log("Total number of removed extra space count aare:", resultLength -lengthAfterTrim);

var StringHandsOn = "Hey you are doing good keep it up"
var charAtZeroIndex = StringHandsOn.charAt(0);
var charAtLastIndex = StringHandsOn.charAt(StringHandsOn.length-1);
console.log("First and Last character of given string after remove extra spaces:", charAtZeroIndex, charAtLastIndex);
