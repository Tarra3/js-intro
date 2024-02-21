/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
*/

//text.at(0)arba text[0] tas pats rezultatas.
//bet text[0] neraso reverse.t.y.[-1][-2].. logina: undefined.
const text = 'Pomidoras';
console.log(text.at(0), text[0]);
console.log(text.at(1), text[1]);
console.log(text.at(2), text[2]);
console.log(text.at(3), text[3]);

//reverse:
console.log(text.at(-1), text[-1]);
console.log(text.at(-2), text[-2]);
console.log(text.at(-3), text[-3]);
console.log(text.at(-4), text[-4]);
console.log(text.at(-5), text[-5]);
console.log(text.at(-6), text[-6]);
console.log(text.at(-7), text[-7]);
console.log(text.at(-8), text[-8]);
console.log(text.at(0), text[0]);

//charCodeAt:    -> skaicius logina viskam:
console.log('a'.charCodeAt(0)); //-> 97
console.log('b'.charCodeAt(0)); //-> 98
console.log('c'.charCodeAt(0)); //-> 99
console.log('A'.charCodeAt(0)); //-> 65
console.log('B'.charCodeAt(0)); //-> 66
console.log('C'.charCodeAt(0)); //-> 67
console.log('--------------------------');
console.log(text.charCodeAt(0)); //->80
console.log(text.charCodeAt(1)); //->111
console.log(text.charCodeAt(2)); //->109

console.log(String.fromCharCode(169)); // -> © 


//zodziui POMIDORAS: (pomidoras=text) 
console.log(text.endsWith('a')); //-> false
console.log(text.endsWith('as')); //-> true
console.log(text.endsWith('s')); //-> true


console.log(text.startsWith('P')); //-> true
console.log(text.startsWith('r')); //-> false


console.log('Pomidoras'.includes('o')); //-> true
console.log('Pomidoras'.includes('omi')); //-> true
console.log('Pomidoras'.includes('omitronas')); //-> false

console.clear();
//.indexOf jei tekste is kur ieskai nera to simbolio logina -1.
console.log('Pomidoras'.indexOf('x')); //-> -1
console.log('Pomidoras'.indexOf('5')); //-> -1
console.log('Pomidoras'.indexOf('deftetr')); //-> -1
console.log('Pomidoras'.indexOf('P')); //-> 0
console.log('Pomidoras'.indexOf('o')); //-> 1
console.log('Pomidoras'.indexOf('m')); //-> 2
console.log('Pomidoras'.indexOf('i')); //-> 3
console.log('Pomidoras'.indexOf('d')); //-> 4




