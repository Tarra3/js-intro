

//1:  Chuck
function findString(name, surname) {
    let nameLength = name.length;
    let surnameLength = surname.length;

    if (nameLength < surnameLength) {
        return name;
    } else {
        return surname;
    }
}
console.log(findString('Chuck', 'Norris'));

/*1.1
const name1 = 'Jonas';
const surname1 = 'Jonaitis';

if (name1.length < surname1.length) {
    console.log(name1);
} else {
    console.log(surname1);
}
*/

//2:   As esu Chuck Norris. Man yra 58 metu.
const name = 'Chuck';
const surname = 'Norris';
const years = 1966;
const thisYear = 2024 - years;

console.log(`As esu ${name} ${surname}. Man yra ${thisYear} metu.`);


//1: uckris
const name1 = 'Chuck';
const surname1 = 'Norris';
const meme = name1.slice(-3) + surname1.slice(-3);
console.log(meme);

//2: *nce up*n a time in h*llyw**d 
const sakinys = 'Once upon a time in hollywood'
    .replace('O', '*')
    .replace('o', '*')
    .replace('o', '*')
    .replace('o', '*')
    .replace('o', '*')
console.log(sakinys);

//2.1: *nce up*n a time in h*llyw**d 
function formatString(string) {
    let newSentence = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i] === 'o' || string[i] === 'O') {
            newSentence += '*';
        } else {
            newSentence += string[i];
        }
    }
    return newSentence;
}
console.log(formatString('Once upon a time in hollywood'))

//3: kinta

const x1 = Math.round((Math.random() * 2));
const x2 = Math.round((Math.random() * 2));
const x3 = Math.round((Math.random() * 2));
const x4 = Math.round((Math.random() * 2));

const list = [x1, x2, x3, x4]
console.log(list);

let count0 = 0;
let count1 = 0;
let count2 = 0;

for (let i = 0; i < list.length; i++) {
    if (list[i] === 0) {
        count0++;
    }
    else if (list[i] === 1) {
        count1++;
    }
    else if (list[i] === 2) {
        count2++;
    }
}

console.log(`0 counter: ${count0}`);
console.log(`1 counter: ${count1}`);
console.log(`2 counter: ${count2}`);



//4: kinta

// let y1 = Math.floor(Math.random() * 4);
// let y2 = Math.floor(Math.random() * 4);
// console.log(y1, y2);
// 
// if (y1 > y2 || y2 !== 0) {
// 
//     rezultatas = y1 / y2;
// }
// else if (y2 > y1 || y1 !== 0) {
// 
//     rezultatas = y2 / y1;
// }
// else if (y1 === 0 || y1 === 0) {
//     rezultatas = 'Dalyba iš nulio negalima';
// }
// console.log(rezultatas.toFixed(2));



//4.1 kinta

const y1 = Math.round((Math.random() * 4));
const y2 = Math.round((Math.random() * 4));

console.log(y1, y2)

function randomNum(y1, y2) {
    let result = 0;
    if (y2 === 0 || y1 === 0) {
        return false;
    }
    else if (y1 > y2) {
        result = y1 / y2
    }
    else if (y2 > y1) {
        result = y2 / y1
    }
    else if (y1 === y2) {
        result = 1;

    }
    return `${result.toFixed(2)}`;
}
console.log(randomNum(y1, y2))


//6  CN
const name3 = 'Chuck';
const surname3 = 'Norris';
const meme3 = name3[0] + surname3[0];
console.log(meme3);


//5 kinta
function rand() {
    return Math.round(Math.random() * 25);
}
const num1 = rand();
const num2 = rand();
const num3 = rand();

console.log(num1, num2, num3)

const result1 = num2
console.log(result1);



//7.1 kinta  Parašyti kodą, kuris generuotų atsitiktinį stringą iš
//lotyniškų mažųjų raidžių. Stringo ilgis 3 simboliai.

function abcRandom1() {

    let abcRandom = '';
    let abc = 'abcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < 3; i++) {

        let randomPos = Math.floor(Math.random() * (abc.length + 1));
        abcRandom += abc.charAt(randomPos);
    }
    return abcRandom;
}
let randomString = abcRandom1(3);

console.log(randomString);




