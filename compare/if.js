/*
IF - reiksmiu palyginimas

SABLONAI:
if () {}
if () {} else {}
if () {} else if () {}
if () {} else if () {} else {}
if () {} ... else if () {} ...
if () {} ... else if () {} ... else {}


PALYGINIMO OPERATORIAI:
- visi: >, <, <=, >=, ==, ===, !=, !==
- naudotini: >, <, >=, <=, ===, !==
- nenaudotini: ==, != 

*/

console.log('START');

const profesija = 'Studentas';
const amzius = 18;
const amziausLimitas = 21;

if (amzius >= amziausLimitas) {
    console.log('Ko noresi?');
} else {
    console.log('sry... Per mazai metuku');
}

let msg = profesija + 'ieina i bara...';

if (amzius >= amziausLimitas) {
    msg = 'Tai ko noresi uzsisakyti?';
} else {
    msg = profesija + '... tu gi vis tiek neturi pinigu...';
}

console.log(msg);

console.log('END');


const win = '98';
let msgWin = 'Tu neturi windowsu???';

if (win === '95') {
    msgWin = 'Windows 95';
} else if (win === '98') {
    msgWin = 'Windows 98';
}

console.log(msgWin);


