console.log("1. Write a normal function 'maleMarriageEligibilty ' with 3 args and check the condition");
console.log("----------------------------------------------------------------------");
var maleMarriageEligibility = function(gender, age,  boyName) {
    var result = (gender=="male" && age>=21) ? `Hey ${boyName} you are eligible for marriage` : `Hey ${boyName} you are not eligible for marriage`;
    console.log(`${result}`); 
}
maleMarriageEligibility ("male", 25, "Bill gates");
maleMarriageEligibility ("male", 17, "Stew Jobs");
console.log("----------------------------------------------------------------------");


console.log("2. Write a normal function 'femaleMarriageEligibilty ' with 3 args and check the condition");
console.log("----------------------------------------------------------------------");
var femaleMarriageEligibility = function(gender, age,  girlName) {
    var result = (gender=="female" && age>=18) ? `Hey ${girlName} you are eligible for marriage` : `Hey ${girlName} you are not eligible for marriage`;
    console.log(`${result}`); 
}
femaleMarriageEligibility ("female", 16, "Jenifer");
femaleMarriageEligibility ("female", 27, "Malinda Gates");
