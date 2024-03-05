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

////


