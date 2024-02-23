
const n1 = 7;
const n2 = 5;

// Function declaration
// (standartine function sintakse)

function sum(a, b) {
    return a + b;
}
console.log(`${n1} + ${n2} = ${sum(n1, n2)}`);  //->7 + 5 = 12


// Kintamajam priskiriame anonimine funkcija
const diff = function (a, b) {
    return a - b;
}
console.log(`${n1} - ${n2} = ${diff(n1, n2)}`); //-> 7 - 5 = 2


// arrow function
const multiply = (a, b) => {
    return a * b;
}
console.log(`${n1} * ${n2} = ${multiply(n1, n2)}`); //-> 7 * 5 = 35

// arrow function
// jeigu, logikos bloke yra TIK 1 salyga (statement)
// tai galima nerasyti: {, return, }
const div = (a, b) => a / b;
console.log(`${n1} / ${n2} = ${div(n1, n2)}`);  //-> 7 / 5 = 1.4

// arrow function
// jeigu, parametru bloke yra TIK 1 parametas
// tai galima nerasyti: (, )  
const cube = a => a ** 3;
console.log(`${n1} ** 3 = ${cube(n1)}`);  //-> 7 ** 3 = 343
console.log(`${n2} ** 3 = ${cube(n2)}`);  //-> 5 ** 3 = 125
