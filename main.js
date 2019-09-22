console.log('Yeah this is good!');

//variable types
//var, let, const
//var - global
//let, const - ES6
var fish = 'tuna';
let cat = 'Jack';
const dog = 'Jill';

//data types
//String, Number, Boolean, null, undefined, Symbol
const name = "John";
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof z);

//concatnation
console.log('My name is ' + name + ' I\'m 15 ' + age + ' old');
//template litterals - ES6
console.log(`My name is ${name} I'm ${age} years old`);

//String properties & methods
const s = "Hello World";
console.log(s.length); //properties doesn't have pranthesis
console.log(s.toUpperCase());
console.log(s.substring(0, 5));//start, end
console.log(s.split(''));
//chain methods
console.log(s.substring(0, 5).toUpperCase());

//Arrays - variables that hold multiple values
const numbers = new Array(1,2,3,4,5); //Array object is a global object that is used in the construction of arrays
console.log(numbers);

const fruits = ['Apple', 'Banana', 'Mango', 'Orange'];
console.log(fruits);

const mixed = ['Apple', 1, 2, true]; //Javascript arrays can hold different data types
console.log(mixed);

//Arrays are zero based
console.log(fruits[1]);

//Update array
fruits[4] = 'Grapes';
console.log(fruits);

//Add value to beginning
fruits.unshift('Strawberries');
console.log(fruits);

//Add value to end
fruits.push('Dragon Fruit');
console.log(fruits);

//Take the last element off
fruits.pop();
console.log(fruits);

//Get the index of element
console.log(fruits.indexOf('Orange'));

//Object litterals
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'], //array
    address: { //embedded object
        street: '50 main street',
        city: 'Boston',
        state: 'MA'
    }
};
console.log(person);

//Access value
console.log(person.firstName, person.lastName); //you can log multiple values
console.log(person.hobbies[1]);
console.log(person.address.street);

//Destructuring - ES6
const { firstName, lastName, address: { city }} = person;
console.log(firstName);
console.log(city);

//Add new element
person.email = "john@email.com";
console.log(person);

//Array of objects
const todo = [
    {
        id: 1,
        text: "Take out trash",
        isCompleted: true
    },
    {
        id: 2,
        text: "Meeting with client",
        isCompleted: true
    },
    {
        id: 3,
        text: "Doctor appoinment",
        isCompleted: false
    },
];
console.log(todo);
console.log(todo[1].text);

//to JSON
const todoJSON = JSON.stringify(todo);
console.log(todoJSON);

//For loop
for (let i = 0; i < 10; i++) {
    console.log(`For loop number: ${i}`);
}

//While loop
let i = 0;
while (i < 10) {
    console.log(`While loop number: ${i}`);
    i++
}

//Loop through array
for (let i = 0; i < todo.length; i++) {
    console.log(todo[i].text);
}

//For of loop - ES6
for (let item of todo) {
    console.log(item.text);
}

//High order array methods - forEach, map, filter
todo.forEach(function(item) {
    console.log(item.text);
});

const todoText = todo.map(function(item) { //return array
    return item.text;
});
console.log(todoText);

const todoId = todo.filter(function (item) {  //return array
    return item.isCompleted == true;
});
console.log(todoId);

//Chain multiple functions
const todoChained = todo.filter(function (item) {  //return array
    return item.isCompleted == true;
}).map(function(item){
    return item.text;
});
console.log(todoChained);

//Conditional statements
// == match value, === match value + data type
// > greater than, < less than, || or, && and ! not, <= =>, !=
const ten = 10;
if (ten == 10) {
    console.log(`Ten is: ${ten}`);
}

const two = '2';
if (two === 2) {
    console.log('Two is a number');
} else {
    console.log('Two is not a number');
}

const bird = 'sparrow';
if (bird === 'crow') {
    console.log('Birds is a crow');
} else if (bird == 'sparrow') {
    console.log('Birds is a sparrow');
} else {
    console.log('Birds is unknown');
}

//Shorthand if (
const tag = 'red';
const color = tag == 'red' ? 'Red' : 'Blue';
console.log(color);


//Switch case
const time = 'night';
switch (time) {
    case 'morning':
        console.log('Good morning.');
        break;
    case 'afternoon':
        console.log('Good afternoon.');
        break;
    case 'night':
        console.log('Good night.');
        break;
    default:
        console.log('Have a nice day.');
}

//functions
// Default values are optional
function addNumber(a = 1, b = 1) {
    return a + b;
}
console.log(addNumber(1,2));

//Arrow function - ES6
const addNums = (a, b) => a + b; //single line, if multiple wrap with {}
console.log(addNums(1,2));

const addFive = a => a + 5;
console.log(addFive(3));

//Object oriented programming
//Object - Constructor function
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob); //date constructor

    this.getBirthYear = function () {
        return this.dob.getFullYear();
    }

    this.getFullName = function () {
        return `${this.firstName} ${this.lastName}`;
    }
}

//Instantiate object
const person1 = new Person('Jhon', 'Doe', '4-1-1980');
const person2 = new Person('Mary', 'Doe', '3-1-1983');
console.log(person1);
console.log(person1.getFullName(), person1.getBirthYear());

//Object - Prototype
Person.prototype.getLastName = function () {
    return this.lastName;
};
console.log(person2.getLastName());

//Class - ES6
class {
    constructor
}
