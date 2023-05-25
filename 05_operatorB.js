
console.log("1. Find the greatest number among two number");
var greaterNumber = function (num1,  num2) {
var result = num1 >= num2 ? `${num1} is greater` : `${num2} is greater`;
console.log(`${result}`);
}
greaterNumber(10, -10);



var greaterNumber = function (num1,  num2) {
    var result = num1 >= num2 ? `${num1} is greater` : `${num2} is greater`;
    console.log(`${result}`);
    }
    greaterNumber(800, 899);

    console.log("--------------------------------------------------------------------");

    console.log( "2. Wheater the given number is EVEN or ODD");

    var isEvenOrOddNum = function (num) {
        var result = num%2 == 0 ? true : false;
        return result; 
               
    }
    var result = isEvenOrOddNum(29);
    var res = (result == true) ? "29 is even ": " 29 is Odd";
    console.log(`${res}`);
    var result = isEvenOrOddNum(44);
    var res = (result == true) ? "44 is even ": " 44 is Odd";
    console.log(`${res}`);
    var result =isEvenOrOddNum(0);
    var res = (result == true) ? "0 is even ": " 0 is Odd";
    console.log(`${res}`);
    var result= isEvenOrOddNum(101);
    var res = (result == true) ? "101 is even ": " 101 is Odd";
    console.log(`${res}`);

    console.log("--------------------------------------------------------------------");


    console.log("3. Check wheater the given word has EVEN or ODD length");

    var wordLength = function (word) {
        var len =word.length;
        var result = len %2 == 0 ? "EVEN" : "ODD";
        return result;
    }
    var returnValue = wordLength("JavaScript");
    console.log(`Given word JavaScript has ->  ${returnValue}`);
    var returnValue = wordLength("developer");
    console.log(`Given word developer has -> ${returnValue}` );
    var returnValue = wordLength("Google");
    console.log(`Given word Google has -> ${returnValue}`);