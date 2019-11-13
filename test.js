"use strict";
// let favouriteFoods = ["Italian", "Thai", "Japanese"]

// favouriteFoods.forEach(element => {
//     console.log(element);
// });

// for (let a of favouriteFoods){
//     console.log(a);
// }

// favouriteFoods.forEach(function(value, index){
//     console.log(`${value} is at index ${index}`);
// });

// favouriteFoods.forEach((value, index) => {
//     console.log(`${value} is at index ${index}`);
// });

// let cohort = { name: "Fast Track", students: 26, teacher: "Roddy"}
// for (let key in cohort){
//     console.log(cohort[key]);
// }
// let dec = 10;
// while (dec > 0){
//     dec /= 2;
//     console.log(dec.toString());
// }
// let student = {
//     name: "Bob",
//     age: 22,
//     address: {
//         "street": "123 Freedom Drive",
//         "state": "NSW",
//         "city": "Sydney"
//     }
// };
// console.log(student["address"]["street"]);

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.awesome = true;
}

let student = new Person("Jack Toke", 15);
const {age, name, awesome} = student;
console.log(name, age, awesome);


class Rectangle{
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
    area(){
        return this.height * this.width;
    }
}

let r = new Rectangle(20, 10);
console.log(r.area());

