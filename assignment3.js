function show() {
    console.log("********************Function display**********************");
    console.log("First Function with no Argument and no Return type");
    console.log("Second Function with no arguments and no return type");

}
show();

var FirstName = "Anurag";
var LastName = "Shrivas";
var CollegeName = "Sipna College of enggineering and Technology"

console.log("******************************Function PersonalDetails****************************");
console.log("First Name:" , FirstName);
console.log("Last Name:", LastName);
console.log("College Name:", CollegeName);



console.log("**************************Function swapValueDude*********************************");
var a = "virat";
var b = "Anushka";


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
swapVariables( a, b);


console.log ("**************************Function addThree values*******************************");
var a= 10.23; 600 ; 40;
var b= "Hello"; "Good"; "Morning";
function addvalueThree(a,b,c) {
    var result = a+b+c;
    console.log("Addition is ", result);
    
}
addvalueThree(10.23,600,40);
addvalueThree("Hello", " Good", " Morning");
