function Person(first, last, age, gender, interests){
    this.name = {
        first,
        last
    };

    this.age = age;
    this.gender = gender;
    this.interests = interests;
}

Person.prototype.greeting = function(){
    console.log("Hi, I'm " + this.name.first + " " + this.name.last);
};

let p = new Person("Jack", "Toke", 36, "male", ["Soccer", "Philanthropy"]);
p.greeting();

function Teacher(first, last, age, gender, interests, subject){
    Person.call(this, first, last, age, gender, interests);
    this.subject = subject;
}

// let t = new Teacher("Amy", "Toke", 31, "female", ["Cycling", "Fishing"], "Mathematics");
// t.greeting();
// console.log(Object.getOwnPropertyNames(Teacher.prototype));
Teacher.prototype = Object.create(Person.prototype);
Object.defineProperty(Teacher.prototype, 'constructor', { value: Teacher, enumerable: false, writable: true});
Teacher.prototype.greeting = function(){
    var prefix;
    if(this.gender === 'male'|| this.gender === 'Male' || this.gender === 'M' || this.gender === 'm'){
        prefix = 'Mr';
    }else if(this.gender === 'female' || this.gender === 'Female' || this.gender === 'F' || this.gender === 'f'){
        prefix = 'Mrs';
    }
    console.log('Hello, My name is ' + prefix + ' ' + this.name.last + ", and I teach " + this.subject);
}

let t = new Teacher("Amy", "Toke", 31, "female", ["Cycling", "Fishing"], "Mathematics");
t.greeting();
