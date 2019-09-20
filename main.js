console.log('Yeah this is good!');

//variable types
//var, let, const
//var - global
//let, const - ES6

var bird = 'Tico';
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
for (var i = 0; i < array.length; i++) {
    array[i]
}
