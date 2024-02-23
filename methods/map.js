
const marks = [10, 2, 8, 4, 6];    //-> [ 10, 2, 8, 4, 6 ]
const doubleMarks = [];

// for (let i=0; i<marks.length; i++) {
//     const number = marks[i];
//     doubleMarks.push(number * 2);
// }

for (const number of marks) {
    doubleMarks.push(number * 2);
}

console.log(marks);            //-> [20, 4, 16, 8, 12]
console.log(doubleMarks);

const tripleMarks = marks.map(number => number * 3);
console.log(tripleMarks);         //-> [30, 6, 24, 12, 18]

console.log('-----------------------------------------------');

// Jeigu skaicius teigiamas, palikti koks yra
// Jeigu skaicius neigiamas - padauginti is 10
const randomNumbers = [10, -2, 3.14, 8.77, 444444, -66.6];
const randomNumbers2 = [];

for (const number of randomNumbers) {
    randomNumbers2.push(number > 0 ? number : number * 10);
}

console.log(randomNumbers);       //-> [10, -2, 3.14, 8.77, 444444, -66.6]
console.log(randomNumbers2);      //-> [10, -20, 3.14, 8.77, 444444, -666]

const rn3 = randomNumbers.map(n => n > 0 ? n : n * 10);
console.log(rn3);         //-> [10, -20, 3.14, 8.77, 444444, -666]  

const pazymiai = [10, 2, 8, 4, 6];
//                10, 4, 10, 8, 10

function geresnisPazymys(n) {
    if (n * 2 > 10) {
        return 10;
    }

    return n * 2;             //->[10, 4, 10, 8, 10]
}

function updateMarks(marks) {
    const newMarks = [];

    for (const mark of marks) {
        newMarks.push(geresnisPazymys(mark));
    }

    return newMarks;          //-> [ 10, 4, 10, 8, 10 ]
}

console.log(updateMarks(pazymiai));

const geresniPazymiai = pazymiai
    .map(n => n * 2 > 10 ? 10 : n * 2);
console.log(geresniPazymiai);

const geresniPazymiai2 = pazymiai.map(geresnisPazymys);
console.log(geresniPazymiai2);    //-> [10, 4, 10, 8, 10]


const students = ['Jonas', 'Maryte', 'Petras', 'Ona'];

function lastChar(text) {
    // const lastCharIndex = text.length - 1;
    // return text[lastCharIndex];

    return text[text.length - 1];
}

const abbr = students.map(lastChar);
console.log(abbr);         //->  ['s', 'e', 's', 'a']