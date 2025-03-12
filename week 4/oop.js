// object literal
const person = {
    name: "Stone",
    age: 12,
    greet: function(){
        console.log(`My name is ${this.name}`)
    }
} 

// new keyword
// const person2 = new Object()
// person2.name = "Lastone",
// person2.age = 14,


// construct function, the function must always start with a capital letter
function Person(name, age) {
    this.name = name
    this.age = age 
}
person.greet =function(){
    console.log(`I am this ${this.name}`)
}
const person2 = new Person("Peter", 13)
console.log(person2)
person2.greet()

const person3 = new Person("Andrew", 30)
console.log(person3)
person3.greet()

const person4 = new Person("Cotrida", 25)
console.log(person4)
person4.greet()

class Xperson {
    constructor (name, age, power)
    {
        this.name = name;
        this.age = age ;
        this.powers = power;
    }
    powers(){
        console.log(`I have this ${this.powers} `)
    }
    
}

const xperson3 = new Xperson("Jean", 25, "mind-reading")
console.log(person3)
xperson3.powers()

const xperson4 = new Xperson("Rouge", 30, "sucking-life")
console.log(person4)
xperson4.powers()

// inheritence
class Employee extends Person {
  constructor(name, age, job) {
    super(name, age); // Calls the parent constructor
    this.job = job;
  }

  work() {
    console.log(`${this.name} is working as a ${this.job}`);
  }
}

const emp1 = new Employee("David", 28, "Software Engineer");
emp1.greet();
emp1.work();