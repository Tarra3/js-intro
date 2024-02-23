/*
HOF - higher order function
*/

function sum(a, b) {
    return a + b;
}
function diff(a, b) {
    return a - b;
}

function multi(a, b) {
    return a * b;
}
function div(a, b) {
    return a / b;
}
//budas2- sitas funkscijas trumpiau perrasyti taip:

const mathFunctions = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
};

function calculator(a, opera, b) {    //opera- operacija
    return mathFunctions[opera](a, b);
}

const res1 = calculator(7, '+', 5);
const res2 = calculator(7, '-', 5);
const res3 = calculator(7, '*', 5);
const res4 = calculator(7, '/', 5);

console.log(res1);    //-> 12
console.log(res2);    //->  2
console.log(res3);    //-> 35
console.log(res4);    //->1.4

console.log('*****************************');

function firstLetter(text) {
    return text[0];
}

function lastLetter(text) {
    return text[text.length - 1];
    // return text.at(-1);
}

function giveMeLetter(text, func) {
    return func(text);
}

console.log(firstLetter('Chuck'));    //-> c
console.log(lastLetter('Chuck'));     //-> k

console.log(giveMeLetter('Chuck', firstLetter));  //-> c
console.log(giveMeLetter('Norris', lastLetter));  //-> s

const sum = (a, b) => a + b;
const diff = (a, b) => a - b;

const calc = (a, func, b) => func(a, b);

console.log(calc(7, sum, 5));    //-> 12
console.log(calc(7, diff, 5));   //-> 2