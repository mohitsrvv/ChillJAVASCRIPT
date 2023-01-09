// document.write('HEllo worlld');
// alert('hello world');
// console.log('heloo world');
// ----------------------------
// document.write('hello world');
// alert('pop-up message baby');
// console.log('hello world');
//-------------------------------\

// => STATEMENTS = set of instructions
// => comments = shortcut command + /

// console.log("HEllo world");


// VARIABLES - most basic building block
// variables - store, access , modify == value
// declare, assigment operator, assign value
/*
let name = "hello moon";
console.log(name);  */



// RULES FOR NAMING THE VARIABLES
// can contain digits, letters, underscore, $
// no keyword
// cannot start with numbers
// case sensitive
// camelCase or underscoree


// LET VS VAR VS CONST
 /* var name = "moon";
let name1 = "moon1";
const name2 = "moon3";
console.log(name1); */


// STRING CONCATENATION -> combine strring values
// `` -> BACKTICKS (template strings) easier option

// const name = "John";
// const lastName = "Smith";
// let fullName;
// console.log("Helo there your full name is: " + name + " " + lastName);


// NUMBERS
// loosly typed -> don't declare type

// const number = 34;
// const number1 = 34.5345;
// let add = number + number1;
// console.log("the additon is: " + add);

// let nm = 20;
// nm += 1;
// nm -= 1;
// nm *= 2;
// nm /= 2; 
// nm++;
// nm--;
// nm % 2;
// console.log(nm);


// IMPLICT TYPE CONVERSION

// let nm1 = '30';
// let nm2 = '50';
// const result = nm1 - nm2; 
// // if result = nm1 + nm2) its going to perform string concatenation
// console.log(result);



// DATATYPES -> 7 TYPES
// primitive -> String, Number, Boolea, Null, Udefined, Symbol
// object -> Arrays, Functions, Objects


// typeof - operator (typeof variable) (typeof value)


// // String
// const text = "Some of my texts";

// // Number
// const number = 44;

// // Boolean
// const value = true;
// // NUll
// const result = null;

// // Undefined


// // Symbol (ES6)
// console.log(typeof text);
// console.log(typeof number);
// console.log(typeof true);


// ARRAYS, FUNCTIONS AND OBJECTS

// ARRAYS -> [], o index based

// const names = ['hello', 'john', 'smith', 'peter', 'harry', 'ron', 56, 66];
// console.log(names);
// console.log(names[2]);


// FUNCTIONS -> declare, and invoke

// function helloNames(){
//     console.log("Hello, myself ron");
//     console.log("Hello, myself harry");
//     console.log("Hello, myself peter");
// }
// helloNames();


// PARAMS -> when declare/define
// plaveholders, local vars
// ARGUMENTS -> when invoke/run/call
// use vars/values, multiple params, undefined

// function greet(name){
//     console.log("Hello, Good morning " + name);
// }
// greet("Harry");
// greet("Peter");
// greet("John");


// RETURN
// default undefined, shortcuts, ignores after
// EXPRESSION

// function addValues(num1, num2){
//     return num1 + num2;
// }

// const firstValue = addValues(3, 5);
// const secondValue = addValues(10, 20);
// // expression
// const add = function(num1, num2){
//     return num1 + num2;
// }
// const thirdValue = add(2,3);
// const values = [firstValue, secondValue, thirdValue];
// console.log(values);


// OBJECTS - key/values pairs methods
// dot notation

// const person = {
//     name: "Harry",
//     lastName: "Potter",
//     age: 40,
//     education: true,
//     married: false,
//     siblings: ['harry', 'potter', 'ron'],
//     greeting: function(){
//         console.log("Hello my name is Harry");
//     },
// };

// console.log(person.name);
// console.log(person.age);


// CONDITIONAL STATEMENTS 
// >, <, >=, <=, ==, ===, !=, !===

// if(true){
//     console.log("HEllo world");
// }

//if - else if - else

// ==  -> check only values
// === -> check both values and type

// let a = 10;
// let b = 6;
// if(a > b){
//     console.log('a is greater than b');
// } else {
//     console.log('b is smaller than a');
// }


// LOGICAL OPERATORS
// (|| - OR) (&& - AND)