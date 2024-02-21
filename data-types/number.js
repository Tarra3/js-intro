/*
NUMBERS

KINTAMUJU INICIAVIMAS:
- const (default)
- let (kai info turi buti kintama)
- var (niekada nenaudoti, nebent zinai ka darai)

SKAICIU KATEGORIJOS:
- normalus
    - tegiami/neigiami
    - sveikieji/desimtainiai
- ne normalus
    - Infinity (begalybes)
    - NaN (not-a-number)

OPERATORIAI:
- priskyrimo (=)
- matematiniai:
    - aritmetiniai: +, -, /, *, %(liekana), **(kelimas laipsniu)
    - aritmetiniai priskyrimo: +=, -=, /=, *=, %=, **=
    - aritmetiniai: ++(kintamaji padidina vienu vienetu), --(mazina vienetu) 
*/

console.log(1);
console.log(2);
console.log(3.1415);
console.log(-4);
console.log(-5.555);
console.log(-Infinity);
console.log(NaN);
console.log(Infinity);

console.clear();

console.log(555);

const a = 1;
const b = -22;
const PI = 3.1415;

console.log(a);
console.log(b);
console.log(PI);

const number1 = 111;
const number2 = 222;
const number3 = 333;

console.log(number1);
console.log(number2);
console.log(number3);

const sum12 = number1 + number2;
console.log(sum12);

console.clear();

const n1 = 7;
const n2 = 5;

console.log(n1, n2);
console.log("labas, rytas");

const sum = n1 + n2;

console.log(n1, '+', n2, '=', sum);

const diff = n1 - n2;
console.log(n1, '-', n2, '=', diff);

const multi = n1 * n2;
console.log(n1, '*', n2, '=', multi);

const div = n1 / n2;
console.log(n1, '/', n2, '=', div);

const du0 = 2 ** 0;
const du1 = 2 ** 1;
const du2 = 2 ** 2;
const du3 = 2 ** 3;
const du4 = 2 ** 4;

console.log(du0);
console.log(du1);
console.log(du2);
console.log(du3);
console.log(du4);

console.log(du2, 2 * 2);
console.log(du3, 2 * 2 * 2);

console.clear();

console.log(28 / 5);
console.log(28 % 5);

console.log(9 / 3);
console.log(9 % 3);

// Pirmadieni = 1, 8, 15
// Antradienis = 2, 9, 16
//...
// Sekmadienis = 7, 14

const diena = 20;
const savaitesDiena = diena % 7;

console.log(diena, savaitesDiena);

const valandos = 7;

// naktis = 0; diena = 1;
const dienaArNaktis = (valandos - (valandos % 12)) / 12;

console.log(dienaArNaktis);

console.clear();

let pinigine = 5;
console.log(pinigine);

pinigine = pinigine + 8;
console.log(pinigine);

pinigine = pinigine - 4;
console.log(pinigine);

console.log("------------------");

let money = 10;
console.log(money);

money = money + 5;
console.log(money);

money = money + 8;
console.log(money);

money += 8;
console.log(money);

money -= 7;
console.log(money);

console.log("------------------");

let k = 10;
console.log(k);

k += 8;
console.log(k);

k *= 2;
console.log(k);

k /= 4;
console.log(k);

k %= 7;
console.log(k);

k -= 7;
console.log(k);

k **= 2;
console.log(k);

console.clear();

let i = 0;
console.log(i);

i = i + 7;
console.log(i);

i = i + 7;
console.log(i);

i += 7;        // vietoj '= i +' lieka '+='
console.log(i);

i++;            // didina vienu vnt.
console.log(i); // 22

i++;
console.log(i); // 23



console.log(`------p-------------`);
// didinimas po loginimo:
let p = 0;
console.log(p);
console.log(p++); // logina - 0, bet minty padidintas 1
console.log(p++); // logina - 1, bet minty padidintas 2
console.log(p++); // logina - 2, bet minty padidintas 3
console.log(p++); // logina - 3, bet minty padidintas 4
console.log(p++); // logina - 4, bet minty padidintas 5
console.log(p); // logina - 5


console.log(`------r-------------`);
// didinimas pries loginima:
let r = 0;
console.log(r);
console.log(++r); // 1
console.log(++r); // 2
console.log(++r); // 3
console.log(++r); // 4
console.log(++r); // 5

// !! negalima (++p-- ++p++ --p-- --p++) dvigubu

