/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
*/

/*
.at() / .charCodeAt() / .endsWith() / .startsWith() / .includes() / 
.indexOf() /  .repeat() /  .replace() / .slice() / .split()/ 
.toUpperCase() / .toLowerCase() / .trim() / 
(trimEnd/trimStart pasiziuret nuoroda)
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

//(method) String.indexOf(searchString: string, position?: number | undefined): number
/*
(method)
String.indexOf(
searchString: string    - a
position?: number | undefined -b
): number

function sum(a, b)

searchString: string - duomens tipas turi buti stringas = tekstas.
position? - (?) reiskia nebutinas bet jei parasysi turi buti (number) 
arba (undefined)
*/
//pvz (a, b):
console.log('----------------ab--------------------');
console.log('Pomidoras'.indexOf('d', 0)); //-> 4 nes randa 4pos. raide d
console.log('Pomidoras'.indexOf('d', 1)); //-> 4 nes randa 4pos. raide d
console.log('Pomidoras'.indexOf('d', 2)); //-> 4 nes randa 4pos. raide d
console.log('Pomidoras'.indexOf('d', 3)); //-> 4 nes randa 4pos. raide d
console.log('Pomidoras'.indexOf('d', 4)); //-> 4 nes randa 4pos. raide d
console.log('Pomidoras'.indexOf('d', 5)); //-> -1 nes per toli nuo d raides
console.log('Pomidoras'.indexOf('d', 6)); //-> -1 nes per toli nuo d raides

console.log('Pomidoras'.indexOf('o'));    //-> 1 (pos. raides o)
console.log('Pomidoras'.indexOf('o', 0)); //-> 1 (pos. raides o)
console.log('Pomidoras'.indexOf('o', 1)); //-> 1 (pos. raides o)
console.log('Pomidoras'.indexOf('o', 2)); //-> 5 (rado pos.5 raide o)
console.log('Pomidoras'.indexOf('o', 5)); //-> 5
console.log('Pomidoras'.indexOf('o', 6)); //->-1

console.clear();



// pakartok teksta "labas" 3 kartus -> turi duot : labaslabaslabas
//1budas: neveikia nes ne skaicius repText
// const repText = 'labas';
// const count = 3;
// const result = repText * count;
// console.log(result); //-> NaN repTex ne skaicius daugyboje, o (*) tikisi aplink skaiciu tik.

//2 budas 
// const repText = 'labas';
// const count = 3;
// let result = '';
// 
// for (let i = 0; i < count; i++) {
//     result += repText;
// }
// 
// console.log(result);  //-> labaslabaslabas

//3 budas 
function repeat(text, count) {
    let result = '';

    for (let i = 0; i < count; i++) {
        result += text;
    }

    return result;
}

console.log(repeat('labas', 0));    // -> tuscia
console.log(repeat('rytas', 1));    // -> rytas
console.log(repeat('Lietuva', 2));  // -> LietuvaLietuva
console.log(repeat('???', 3));      // -> ?????????
console.log(repeat('labas', 4));    // -> labaslabaslabaslabas
console.log(repeat('labas', 5));    // -> labaslabaslabaslabaslabas

//tokie patys ats: 
console.log('labas'.repeat(0));
console.log('rytas'.repeat(1));
console.log('Lietuva'.repeat(2));
console.log('???'.repeat(3));
console.log('labas'.repeat(4));
console.log('labas'.repeat(5));

console.clear();



//replace(''-ka nori keisti , ''-i ka nori keisti) 
//1:
console.log('vasara'.replace('a', '-'));  // -> v-sara "a" pekeite i "-".

//2: const vasara = 'vasara'.replace('a', '-'); // -> v-sara
//3: const vasara = 'vasara'.replace('a', '-').replace('a', '-'); // v-s-ra

//4: const vasara = 'vasara'
//.replace('a', '-')
//.replace('a', '--')
//.replace('a', '---');  //->  v-s--r---

//5: const vasara = 'vasaravasaravasaravasaravasara'
// .replace('a', '-')
// .replace('a', '-')
// .replace('a', '-')
// .replace('a', '-')
// .replace('a', '-');  //->v-s-r-v-s-ravasaravasaravasara

// console.log(vasara);

//6: automatizuoti: .replaceAll

const vasara = 'vasaravasaravasara'.replaceAll('a', '-')//->v-s-r-v-s-r-v-s-r-
console.log(vasara);

console.clear();



//           012345678
console.log('Pomidoras'.slice());    //-> Pomidoras
console.log('Pomidoras'.slice(0));   //-> Pomidoras
console.log('Pomidoras'.slice(1));   //-> omidoras
console.log('Pomidoras'.slice(2));   //-> midoras
console.log('Pomidoras'.slice(3));   //-> idoras

// nuo antro sk nupjauna likuti (pirmas sk imtinai, antras ne)
console.log('Pomidoras'.slice(0, 5));   //-> Pomid
console.log('Pomidoras'.slice(1, 5));   //-> omid
console.log('Pomidoras'.slice(2, 5));   //-> mid

console.log('------------minusiniai-------------');
//           876543210-
//          +012345678
console.log('Pomidoras'.slice(-1));       //-> s
console.log('Pomidoras'.slice(-3));       //-> ras
console.log('Pomidoras'.slice(-4));       //-> oras
console.log('Pomidoras'.slice(-4, -2));   //-> or
console.log('Pomidoras'.slice(2, -2));    //-> midor

console.clear();


console.log('Pomidoras'.split());     //-> [ 'Pomidoras' ]
console.log('Pomidoras'.split('m'));  //-> ['Po', 'idoras']
console.log('Pomidoras'.split('i'));  //-> [ 'Pom', 'doras' ]
console.log('Pomidoras'.split('o'));  //-> [ 'P', 'mid', 'ras' ] dvi o

console.log('vasara'.split('a'));  // -> [ 'v', 's', 'r', '' ]
console.log('vasara'.split('s'));  // -> [ 'va', 'ara' ]
console.log('vasara'.split('v'));  // -> [ '', 'asara' ]
console.log('vasara'.split('v')[0].length);  //-> 0 nes tuscias tekstas ''
console.log('vasara'.split('v')[1].length);  //-> 5 nes 'asara' raides 5

console.log(''.split('a'));          //-> ['']
console.log('vasara'.split('x'));    //-> ['vasara']
console.log(''.split(''));           //-> [] 
console.log('vasara'.split(''));     //->['v', 'a', 's', 'a', 'r', 'a']

console.clear();


console.log('vasara'.toUpperCase());  //-> VASARA
console.log('VAsara'.toUpperCase());  //-> VASARA
console.log('VAsara'.toLowerCase());  //-> vasara

console.clear();


console.log('vasara'.trim());             //-> vasara
console.log(`"${'vasara'.trim()}"`);       //-> "vasara"
console.log(`"${'v a s a r a'.trim()}"`);   //-> "v a s a r a"
console.log(`"${'v  a  s  a  r  a'.trim()}"`); //-> "v  a  s  a  r  a"
console.log(`"${'     vasara'.trim()}"`);        //-> "vasara"
console.log(`"${'vasara     '.trim()}"`);         //-> "vasara"
console.log(`"${'   vas   ara     '.trim()}"`);    //-> "vas   ara"
