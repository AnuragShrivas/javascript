
const arrayFruits =[ "Banna", "Orange", "Apple", "Mango", "Water Melon"];
let lengthOfArray = arrayFruits.length;
console.log(lengthOfArray);

console.log("add elemet papaya");
arrayFruits.unshift("Papaya");
console.log(arrayFruits);

console.log("Remove Mango");
arrayFruits.splice(3);
console.log(arrayFruits);


arrayFruits.push("Pineapple");
console.log(arrayFruits);

arrayFruits.splice(4, 0, "Dragon fruit");
console.log(arrayFruits);




