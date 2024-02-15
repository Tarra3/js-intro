/*
suskaiciuoti skaiciu suma intervale (imtinai)
pvz.: 0...4-> 0+1+2+3+4 = 10
*/

let sum = 0;

for (let i = 0; i <= 4; i++) {
    sum += i;
    console.log(i, sum);
}

console.log('SUM:', sum);

console.log(`----------------nauja 0-100-----`);

let sum2 = 0;

for (let i = 0; i <= 100; i++) {
    sum2 += i;
}

console.log(`SUM2:`, sum2);

// gali buti: (lengviau keisti kintamuosius)
const min = 0;
const max = 100;
let sum3 = 0;

for (let i = min; i <= max; i++) {
    sum3 += i;
}

console.log(`SUM3:`, sum3);

// arba daryti funkcija: su mazais skaiciais tik.

function sumBetween(min, max) {
    sum3 = 0;

    for (let i = min; i <= max; i++) {
        sum3 += i;
    }
    return sum3;
}

console.log(sumBetween(0, 4));
console.log(sumBetween(0, 10));
console.log(sumBetween(13, 15));


// sakinys: Sum between 0 and 4 is 10.
function sumBetween1(min, max) {
    total = 0;

    for (let i = min; i <= max; i++) {
        total += i;
    }
    return total;
    // return `Sum between ${min} and ${max} is ${total}.`;
}

console.log(sumBetween1(0, 5));
console.log(sumBetween1(0, 10));
console.log(sumBetween1(13, 15));
console.log(sumBetween1(0, 100));
console.log(sumBetween1(0, 1000));
console.log(sumBetween1(0, 10_000));
// console.log(sumBetween1(0, 10_000_000));
// console.log(sumBetween1(0, 100_000_000));
// console.log(sumBetween1(0, 1000_000_000)); //neteisinga ir ilgai

console.log(`gera-------------------------`);
function correctBetween(max) {
    return (max * (max + 1)) / 2;

}
console.log(correctBetween(5));
console.log(correctBetween(10));
console.log(correctBetween(15));
console.log(correctBetween(100));
console.log(correctBetween(1000));
console.log(correctBetween(10_000));
console.log(correctBetween(1000_000_000));

//ND:
function correctBetween1(min, max) {

}