/*
FUNCTION - funkcija
Perpanaudojamas logikos blokas

function example(parametrai) {
    // 1. paramentru validavimas
    // 2. logika
    // 3. rezultato validavimas
    // 4. rezultato grazinimas
}

*/

// DRY (don't repeat yourself)

const a1 = 7;
const a2 = 5;
const a3 = 1 + a1 * 2 + a2 * 3 + 3;
console.log(a3);

const b1 = 13;
const b2 = 13;
const b3 = 1 + b1 * 2 + b2 * 3 + 3;
console.log(b3);

const c1 = 7;
const c2 = 77;
const c3 = 1 + c1 * 2 + c2 * 3 + 3;
console.log(c3);

function empty() {

}

const x1 = empty();
console.log(x1);

function boolFalse() {
    return false;
}

const x2 = boolFalse();
console.log(x2);

const x3 = boolFalse();
console.log(x3);

function giveMeNumber() {
    return 42069;
}
const x4 = giveMeNumber();
console.log(x4);

const x5 = giveMeNumber();
console.log(x5);


function labas(name) {
    return `Labas, as ${name}!`;
}
// VARDAS -> Labas, as {VARDAS}!
// Krabas -> Labas, as Krabas!
// Jonas -> Labas, as Jonas!
// Maryte -> Labas, as Maryte!

const x6 = labas('Krabas');
console.log(x6);
const x7 = labas('Jonas');
console.log(x7);
const x8 = labas('Maryte');
console.log(x8);

/*
function dvygubai(number) {
    return number * 2;
}
const x9 = dvygubai(10);
console.log(x9);
const x10 = dvygubai(11);
console.log(x10);
const x11 = dvygubai(-2);
console.log(x11);


function introduction(name, age) {
    return `Sveiki, mano vardas ${name} ir man ${age} metai.`;
}
const x12 = introduction('Jonas', 99);
console.log(x12);
const x13 = introduction('Maryte', 88);
console.log(x13);

// 0 -> 0 Eur
// 10 -> 10 Eur
// 90 -> 90 Eur
// 50 -> 50 Eur
// 102 -> 51 Eur
// 99 -> 99 Eur
// 100 -> 50 Eur
// 200 -> 100 Eur

function price(amount) {
    if (amount < 100) {
        return amount + ' Eur';
    } else {
        return (amount / 2) + ' Eur'; { }
    }
}

console.log(price(0), '->', '0 Eur');
console.log(price(10), '->', '10 Eur');
console.log(price(50), '->', '50 Eur');
console.log(price(90), '->', '90 Eur');
console.log(price(99), '->', '99 Eur');
console.log(price(100), '->', '50 Eur');
console.log(price(102), '->', '51 Eur');

console.log(price(-200), '->', 'ERROR');
console.log(price(Infinity), '->', 'ERROR');
console.log(price(-Infinity), '->', 'ERROR');
console.log(price(NaN), '->', 'ERROR');
console.log(price(true), '->', 'ERROR');

// if (typeof amoount !== 'number') {
// return 'ERROR': duok skaiciu';

console.log(price('dasfd'), '->', 'ERROR');
console.log(price(undefined), '->', 'ERROR');
console.log(price(), '->', 'ERROR');
console.log(price(price), '->', 'ERROR');


if (isNaN(NaN)) {
    console.log('taip');
} else {
    console.log('ne');
}
if (isFinite(NaN)) {
    console.log('taip');
} else {
    console.log('ne');

    if ('' + NaN === 'NaN') {
        console.log('taip');
    } else
        console.log('ne');
}
if (amount === Infinity) {
    return 'ERROR: skaicius negali buti Infinity';
}
if (isNaN(amount)) {
    return 'ERROR: duok normalu skaiciu';
}
*/
