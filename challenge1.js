//Q1
//Add two numbers and return the value
let add = (a, b) => a + b;

//Call the above function 4 times
for(let i=0; i< 4; i++){
    let a = Math.round(Math.random()*100);
    let b = Math.round(Math.random()*100);
    console.log(add(a,b));
}

//Q2
//Define 2 integers and 2 float variables
let x = Math.round(Math.random()*10);
let y = Math.round(Math.random()*10);
let a = new Number((Math.random()*10).toFixed(2));
let b = new Number((Math.random()*10).toFixed(2));

//Q3
console.log("Q3:");
console.log(add(x, y));
console.log(a);
console.log(b);
console.log((add(a,b)).toFixed(2));

//Q4
let person = ["Jack", 36, false, "passed" ];
console.log("Q4");
console.log(person[0]);
console.log(person[2]);

console.log("Q6");
let student = {"name": "Jack Toke"};
// console.log(student["name"])

console.log("Q7");
function print(student){
    console.log(student["name"]);
}

print(student);

console.log("Q8");
let studentAges = {"Jack Toke": 36, "Michelle Wong": 32, "Chris T": 29};
Object.keys(studentAges).forEach((key, value) => {
    console.log("Name: " + key + " Age: " + value);
});

console.log("Q9");
let student1 = {name: "Jack Toke"};
let student2 = {name: "Michelle Wong"};
let student3 = {name: "Mark J"};
let student4 = {name: "Roddy Mc"};
console.log(student1.name);
console.log(student2.name);
console.log(student3.name);

console.log("Q11");
let something = [];
function pushStuff(array, obj){
    array.push(obj);
}
console.log("Q12");
// pushStuff(something, student3);
// console.log(something[0].name);
pushStuff(something, student1);
pushStuff(something, student2);
pushStuff(something, student3);
pushStuff(something, student4);
console.log("Q13");
something.forEach(student => {
    console.log(student.name);
});

console.log("Q15&16");
console.log(something[2].name);

let func = function(obj, array){
    console.log(obj["title"], array[ Math.round(Math.random() * array.length )]);
}

console.log("Q17");
// aFunc(student1, something);

let book1 = {title: "The Five Dysfunctions of a Team"};
let book2 = {title: "The Twelve Rules of Life", isbn: "12-28398-898"};
let book3 = {title: "Javascript The Definitive Guide", isbn: "898-8928838-89", price: 22};
let book4 = {title: "The Desire of Ages", isbn: "838-8982222-88", price: 5, category: "religious"};

let arr1 = [12, 32, 329, 11, 33];
let str1 = ["Pizza", "Pasta", "Crepe", "Tom Yum"];
arr1.l
func(book1, arr1);
func(book2, arr1);
func(book3, str1);
func(book4, str1);

function randomFunc(s1, s2, s3, n1, n2){
    console.log(s1, s2, s3, n1, n2);
}

for (let i=0; i<4; i++){
    randomFunc("Jack", "Pyo", "Toke", 36, 1982);
}
