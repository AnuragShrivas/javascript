

// WAP to get table for 5 ==> 5   10   15   20  25  30   ---- 50
for (let index = 5; index <=50; index=index+5) { // index = 11
    console.log(index); // 0 1  2 ... 10 
}
console.log("After loop");



//WAP to get 100 to 80 in reverse order by decremating : //100 99 98 97

for (let index = 100; index >= 80; index--) {

     console.log(index);

}

//wap to get the table 19 in reverse order
for (let index =190; index >= 19; index= index-19) {
    console.log(index);
    
}

//wap to get the table of 8
for (let index = 8; index <= 80; index= index+8) {
    console.log(index);
    
}

//wap to wirte javaScript ---> J a v a S c r i p t
var str = "JavaScript";
for (let index = 0; index < str.length; index++) {
    var char=str.charAt(index);
    console.log(char);
}
console.log("--------------reverse string-------------------");
// WAP to reverse the string --> JavaScript --> tpircSavaJ

// JavaScript -->

// initialization = 9

// condition index>=0

// update expression index--

var str = "JavaScript";

var reverseString = "";

for (let index = 9; index >= 0; index--) { // index = 9  8 

    var char = str.charAt(index);

    reverseString = reverseString.concat(char); 

}

console.log(reverseString);

console.log("===============================================================================");
//reverserword
function reverseWord(word){

    var reverseString = "";

    var wordLength = word.length - 1;

    for (let index = wordLength; index >= 0; index--) { // index = 9  8 

        var char = word.charAt(index);

        reverseString = reverseString.concat(char);    

    }

console.log(reverseString);

}

reverseWord("JavaScript");

reverseWord("Google Chrome");

reverseWord("Developer");