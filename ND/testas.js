/* /1:
const x1 = Math.round(Math.random());
const x2 = Math.round(Math.random());
const x3 = Math.round(Math.random());

console.log(x1, x2, x3) //logina tik 0 ir 1 

*/

/*
function rand() {
    return Math.round(Math.random());
}
const num1 = rand();
const num2 = rand();
const num3 = rand();

console.log(num1, num2, num3)
//logina tik 0 ir 1  



let x = (Math.ceil(Math.random()) + 1);
console.log(x);



const r1 = Math.random();
console.log(r1);



//1  !!!!!!!!!!! 
function fafa() {

    return Math.floor(Math.random() * (9 - 100 + 1)) + 100;
}

let falafel = fafa();

console.log(falafel);


//2 !!!!!!!!!!!!
console.log(Math.floor(Math.random() * (9 - 100 + 1)) + 100);


*/
/*
const delfinai = [96, 108, 89];
const koalos = [88, 91, 110];

function avg(arr) {
    let sum = 0;
    arr.map((n) => {
        sum += n;
    });
    const average = sum / arr.length;
    return average;
}

const delfinaiAvg = avg(delfinai);
const koalosAvg = avg(koalos);

console.log(avg(delfinai));
console.log(avg(koalos));


const winner = delfinaiAvg > koalosAvg ? "Delfinai laimejo" : delfinaiAvg < koalosAvg ? "Koalos laimejo" : "Lygiosios";
console.log(winner);


const hasminPoints = (arr) => arr.some((n) => n >= 100);
const delfinaiWins = delfinaiAvg > koalosAvg && hasminPoints(delfinai);
const koalosWins = koalosAvg > delfinaiAvg && hasminPoints(koalos);

////

function plotas(a, b) {
    return (a * b);
}
console.log(plotas(2, 3));
*/
////

console.log(`---------------f-jos-----------`)

//1.
// const x = vardas(`Chuck Noris`)
// function vardas(name) {
//     return `Labas, ${name}!`;
// }
// console.log(x);


//2.

// function sum(a, b) {
//     return a + b;
// };
// console.log(sum(5, 2));


//3.
// const marks = [3, 5, 7, 9];
// let sum = 0;
//
// for (let i = 0; i < marks.length; i++) {
//     sum += marks[i];
// }
// console.log(`SUMA:`, sum);

//4.
function biggest(list) {

    if (!Array.isArray(list)) {
        return 'ERROR: duok masyva';
    }
    if (list.length === 0) {
        return 'ERROR: tuscias masyvas';
    }

    let biggestNumber = -Infinity;

    for (const number of list) {
        if (typeof number !== 'number' || !isFinite(number)) {
            continue;
        }
        if (number > biggestNumber) {
            biggestNumber = number;
        }
    }

    if (biggestNumber === -Infinity) {
        return 'ERROR: masyve nerasta nei vieno normalaus skaiciaus';
    }
    return biggestNumber;
}

console.log(biggest([3, 5, -7, 99]));



//5. length
function length(tekstas) {
    return tekstas.length;
}
console.log(length(`zodis chuck`));


//6.  

//7. 


//8.
function reverse(text) {
    let result = '';
    for (let i = text.length - 1; i >= 0; i--) {
        result += text[i];
    }
    return result;
}
console.log(reverse('triufelis'));

//9.

//10. 
function lyginis(number) {
    if (number % 2 === 0) {
        return true;
    }
    return false;
}

console.log(lyginis(4));

// budas.2: const even = (number) => number % 2 === 0; 

//11.
function replace(text, count) {
    let result = '';
    for (let i = 0; i < count; i++) {
        result += text;
    }
    return result;
}
console.log('vasara'.replace('a', '1'));

//12. 
function faren(tempa) {
    return (tempa * 1.8) + 32;
}
console.log(faren(30));

//13.

//131.

//14. 


//15. 


//16.

//17.


//18. 
function amzius(year, year1) {
    return (year - year1);
}
console.log(amzius(2024, 1992));


