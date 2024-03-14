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

/*console.log(`---------------f-jos-----------`)

//1.Parašykite funkciją, kuri priima vartotojo vardą kaip argumentą ir grąžina
// pasveikinimo žinutę.
const x = vardas(`Chuck Noris`)
function vardas(name) {
    return `Labas, ${name}!`;
}
console.log(x);
//1.1 
function greeting(name) {
    return `Hello, ${name}!`
}
console.log(greeting(`Popo`));

//2.Sukurkite funkciją, kuri priima du skaičius kaip argumentus ir grąžina jų sumą.

// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(5, 2));


//3.Parašykite funkciją, kuri priima masyvą kaip argumentą ir grąžina visų masyvo elementų sumą.

const marks = [3, 5, 7, 9];
let sum = 0;

for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
}
console.log(`SUMA:`, sum);

//3.1
function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
console.log(sumArray([3, 5, 7, 9]));


//4.Sukurkite funkciją, kuri priima masyvą skaičių ir grąžina didžiausią skaičių masyve.

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

//4.1 
function findMaxArray(array) {
    return Math.max(...array);
}
console.log(findMaxArray([3, 5, -7, 101]));


//5. Parašykite funkciją, kuri priima tekstą kaip argumentą ir grąžina to teksto ilgį.
function length(tekstas) {
    return tekstas.length;
}
console.log(length(`zodis chuck`));


//6.  Sukurkite funkciją, kuri priima skaičių ir grąžina jo faktorialą.

function factiorialNum(number) {
    for (let i = number - 1; i >= 1; i--) {
        number = number * i;
    }
    return number;
}
console.log(factiorialNum(5)); //-> 120


//7. Parašykite funkciją, kuri priima masyvą skaičių ir skaičių kaip argumentus,
//o grąžina naują masyvą, kuriame yra tik tie skaičiai, kurie didesni už pateiktą skaičių.

function filterArray(array, arg) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= arg) {
            result.push(array[i]);
        }
    }
    return result;
}
console.log(filterArray([1, 5, 10, 15, 20], 6)); //-> [10, 15, 20]



//8. Sukurkite funkciją, kuri priima tekstą kaip argumentą ir grąžina jį atvirkštine tvarka.

function reverse(text) {
    let result = '';
    for (let i = text.length - 1; i >= 0; i--) {
        result += text[i];
    }
    return result;
}
console.log(reverse('triufelis'));

//8.1 
function reverseString(text) {
    return text.split('').reverse().join('');
}
console.log(reverseString('triufelis'));

//9. Parašykite funkciją, kuri nustato, ar pateiktas tekstas yra palindromas.

function palindromeChecker(text) {
    const reversedText = text.split('').reverse().join('');
    if (text === reversedText) {
        return true;
    }
    return false;
}
console.log(palindromeChecker('boga'));


//10. Sukurkite funkciją, kuri priima skaičių ir grąžina true, jei skaičius yra
// lyginis, ir false, jei skaičius yra nelyginis.

function lyginis(number) {
    if (number % 2 === 0) {
        return true;
    }
    return false;
}

console.log(lyginis(4));

// budas 10.2:  const even = (number) => number % 2 === 0;


//11. Parašykite funkciją, kuri priima tekstą ir dvi eilutes: pakeistiną
//simbolį ir pakeitimo simbolį. Funkcija grąžina naują tekstą su pakeistais simboliais.

function replace(text, count) {
    let result = '';
    for (let i = 0; i < count; i++) {
        result += text;
    }
    return result;
}
console.log('vasara'.replace('a', '1')); //-> v1sara

//11.1
function modifyString(string, a, b) {
    return string.toLowerCase().replaceAll(a, b)
}
console.log(modifyString('Vasara', 'a', '1')); //-> v1s1r1



//12. Sukurkite funkciją, kuri priima temperatūrą Celsijaus laipsniais ir konvertuoja ją į Farenheito laipsnius.
function faren(tempa) {
    return (tempa * 1.8) + 32;
}
console.log(faren(30));

//13.Parašykite funkciją, kuri priima masyvą ir grąžina naują masyvą be dublikatų.

// function multipleArrays(a, b, c) {
//     const duplicates = a.filter(i => b.includes(i) && c.includes(i));
//     return duplicates;
// }
// console.log(multipleArrays([a, m, a, r, m, a]));

function removeDuplicates(array) {
    let filtered = [];
    for (let i = 0; i < array.length; i++) {
        if (!filtered.includes(array[i])) {
            filtered.push(array[i]);
        }
    }
    return filtered;
}
console.log(removeDuplicates([2, 5, 5, 3, 3, 9, 9, 9, 7])); //-> [ 2, 5, 3, 9, 7 ]

//131. Sukurkite funkciją, kuri priima skaičių ir grąžina true, jei skaičius yra pirminis, ir false, jei ne.

function isPrimeNumber(number) {
    const sqrt = Math.sqrt(number);
    if (number < 2) {
        return false;
    }
    for (let i = 2; i <= sqrt; i++) {
        if (number % i === 0) {
            return false
        }
    }
    return true;
}
console.log(isPrimeNumber(7)); //-> true


//14.   Parašykite funkciją, kuri priima masyvą skaičių ir grąžina jį surikiuotą mažėjančia tvarka.

function sortArray(array) {
    return array.sort((a, b) => b - a);
}
console.log(sortArray([1, 5, 10, 15, 20]));


//15. Sukurkite funkciją, kuri priima du skaičius kaip pradžios ir pabaigos
// intervalo ribas ir grąžina visų skaičių, esančių tame intervale, sumą

function sumInBetween(c, d) {
    let result = 0;
    for (let i = c; i <= d; i++) {
        result += i;
    }
    return result
}
console.log(sumInBetween(3, 6)); //-> 18


//17. Parašykite funkciją, kuri priima tekstą ir grąžina jį, pakeisdamas kiekvieną raidę į sekantį raidę abėcėlėje.

function replaceNextLetter(text) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const s = text.toLowerCase();
    let result = '';
    for (let i = 0; i < s.length; i++) {
        if (/[a-z]/.test(s[i])) {
            let index = alphabet.indexOf(s[i]);
            let nextIndex = (index + 1) % alphabet.length;

            result += alphabet[nextIndex];
        }
    }
    return result;
}
console.log(replaceNextLetter('majonezas')); //-> nbkpofabt


//18. Sukurkite funkciją, kuri priima gimimo metus ir grąžina asmenio amžių.
function amzius(year, year1) {
    return (year - year1);
}
console.log(amzius(2024, 1992));
//18.1
function amzius1(year) {
    return 2024 - year;
}
console.log(amzius1(1992));


// 19. Parašykite funkciją, kuri priima tekstą ir simbolį, o grąžina, kiek kartų tas simbolis pasikartoja tekste.
function charCounter(text, char) {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === char) {
            count++;
        }
    }
    return count;
}
console.log(charCounter('cocccco', 'c')); //-> 5 (c raides)



//20. Parašykite funkciją, kuri priima kelių masyvų sąrašą ir grąžina naują masyvą,
// kuris sudarytas tik iš tų elementų, kurie pasikartoja visuose pradiniuose masyvuose.

function multipleArrays(a, b, c) {
    const duplicates = a.filter(i => b.includes(i) && c.includes(i));
    return duplicates;
}
console.log(multipleArrays([1, 2, 3, 4], [4, 5, 6], [4, 8, 7])); //->[ 4 ] 

*/

console.log(`---------------objektai-------------`)


//1.
const book = {
    'name': 'Mažasis princas',
    'author': 'Antuano de Sent',
    'year': 1943,
}
console.log(book['name']);
console.log(book['author']);
console.log(book['year']);
// Mažasis princas
// Antuano de Sent
// 1943

//2.
const vardai = [
    { name: 'Coco', age: 101 },
    { name: 'Fofo', age: 4 },
    { name: 'Dodo', age: 55 },
];

for (const vardas of vardai) {
    console.log(`${vardas.name}: ${vardas.age}`);
}
//Coco: 101
//Fofo: 4
//Dodo: 55

//3.************************************
// const prekes = [
//     {name: 'duona', price: 4, cat: 'bakaleja' },
//     {name: 'agurkas', price: 2, cat: 'darzove' },
//     { name: 'silke', price: 6, cat: 'zuvis' },
// ]
// for


//4. ******************************

//5.
const moto = {
    brand: 'kawasaki',
    model: 'ninja',
    color: 'green',
    price: 2000,
}
for (const key in moto) {
    const value = moto[key];
    console.log(key, value);
}

//6.
const marks = [5, 3, 4, 10];
let sum = 0;
for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
}
console.log('SUM:', sum)

//7.
function findMax(array) {
    return Math.max(...array);
}
console.log(findMax([3, 5, -10, 101]));

//8. (pagal 5 moto:)
const keysCount = Object.keys(moto).length;
console.log(keysCount);

//9.
const vardai1 = [
    { name: 'Coco', age: 101 },
    { name: 'Fofo', age: 4 },
    { name: 'Dodo', age: 55 },
];
const vardas1 = vardai1
    .filter(v => v.age > 18);
console.log(vardas1);


//10.
