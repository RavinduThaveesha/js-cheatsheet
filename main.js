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
