/*
UNARY - vienas
BINARY - du
TERNARY - trys
*/


// unary
const a = 5;

// binary

// ternary
let g1 = 0;

if (1 > 2) {
    g1 = 3;
} else {
    g1 = 4;
}
console.log(g1);

const t1 = 1 > 2 ? 3 : 4
console.log(t1);

const t2 = 1 < 2 ? 3 : 4
console.log(t2);


const amzius = 20;
const limitas = 21;

let msg = '';

if (amzius >= limitas) {
    msg = 'uzeik';
} else {
    msg = 'Dar palauk...';
}
console.log(msg);


console.log('nauja------------------');
const x1 = true ? 0 : 1;
console.log(x1);

const x2 = false ? 0 : 1;
console.log(x2);

const x3 = 0 ? 1 : 2;
console.log(x3);

const x4 = 1 ? 2 : 3;
console.log(x4);

const x5 = 0 ? 1 : 2 ? 3 : 4;
console.log(x5);

const x6 = 1 ? 2 : 3 ? 4 : 5;
console.log(x6);

const x7 = '' ? 0 ? 1 : 2 : 3;
console.log(x7);

const x8 = 0 ? 1 ? 2 : 3 : 4 ? 5 : 6;
/* = 0 
 ?1
    ?2
    :3
:4
    ?5
    :6;
*/
console.log(x8);




