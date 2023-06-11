


class Student {
    constructor(name, age, gender,city){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.city = city;
    }
    showDetails(){
        console.log(`Details is ${this.name}, ${this.age}, ${this.gender}, ${this.city} `);

    }
}
const abhijeet = new Student("Abhijeeet", 21, "Male", "Pune");
const poonam = new Student("Poonam", 20, "Female", "Mumbai" );
const rushi = new Student("Rushikesh", 23, "Male", "Indor");
const snehal = new Student("Snehal", 22, "Male", "Pune");

// Array use to show the object
const array = [abhijeet, poonam, rushi, snehal];

for (const element of array) {
    element.showDetails();
}// end array

abhijeet.showDetails(); 
snehal.showDetails();
rushi.showDetails();