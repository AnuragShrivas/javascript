
console.log("Count the total number vowels ");
var string =  "I am very good IT Devloper";
var count = 0;
for (let index = 0; index < string.length; index++) {
    var char = string.charAt(index);
    if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || 

        char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') {

        console.log(char);

        count++;
        }
    }
    console.log(`Count total vowels: ${count}`);

    console.log("===============================================================================================");
    console.log("sum of cube of 1 to 5"); 
    
    var sumOfcube = function () {
        var sum=0;
        for (let index = 1; index <= 5; index++) {
            sum = sum + index*index*index;
            
        }
        console.log(`Sum of Qube of Number is:${sum}`);
 }
 sumOfcube(5);


console.log("======================================================================");

function oddPositinedChar (string) {
    var str = "";
    for (let index = 0; index < string.length; index++) {
        var char = string.charAt(index);
        if (index%2!=0 && char!="  ") {
            str = str + char;
        }
        
    }
    console.log(`${str}`);
}

oddPositinedChar("Hard work always pays back");

function oddPositinedChar (string) {
    var str = "";
    for (let index = 0; index < string.length; index++) {
        var char = string.charAt(index);
        if (index%2!=0 && char!="  ") {
            str = str + char;
        }
        
    }
    console.log(`${str}`);
}

oddPositinedChar("Soon i will be Angular IT Champ");