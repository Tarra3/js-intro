/* 
TYPEOF - duomens tipo nustatymo operatorius
*/
const c = typeof true;
console.log(c);

function example() {
    return 777;
}

const d = typeof example;
console.log(d);

const e = typeof example();
console.log(e);

const f = typeof undefined;
console.log(f);

const g = typeof typeof true;
// const g = typeof (typeof true);
// const g = typeof ('boolean');
// const g = typeof 'boolean';
// const g = 'string';
console.log(g);
