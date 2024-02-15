
const marks = [10, 2, 8, 4, 6];

const badMarkLimit = 5;

// kokie gauti geri pazymiai?
const goodMarks = marks.filter(n => n > badMarkLimit);
console.log(goodMarks);

// kokie gauti blogi pazymiai?
const badMarks = marks.filter(n => n <= badMarkLimit);
console.log(badMarks);

//arba:
const goodMarks2 = [];

for (const n of marks) {
    if (n > badMarkLimit) {
        goodMarks2.push(n);
    }
}
console.log(goodMarks2);

// kiek gauta geru pazymiu?
// kiek gauta blogu pazymiu?
// koks didziausias blogas pazymys?
// koks maziausias geras pazymys?

console.log('-----------------------------------');

const numbers = [1, 5, 7, -8, 6, -10, 13];

const evenNumbers = numbers.filter(n => n % 2 === 0);
console.log(evenNumbers);

const oddNumbers = numbers.filter(n => n % 2 === 1);
console.log(oddNumbers);


const randomNumbers = [1, 5, 7.77, -8, 6.66, -10, 13.14];

const integerNumbers = randomNumbers.filter(n => n % 1 === 0);
const floatNumbers = randomNumbers.filter(n => n % 1 !== 0);
console.log(integerNumbers);
console.log(floatNumbers);


const students = [
    { name: 'Jonas', age: 99, isMaried: true },
    { name: 'Maryte', age: 88, isMaried: false },
    { name: 'Petras', age: 77, isMaried: false },
    { name: 'Ona', age: 66, isMaried: true },

];

//s - yra studentai - trumpinys 

const mariedStudents = students.filter(s => s.isMaried);
console.log(mariedStudents);
const notMariedStudents = students.filter(s => !s.isMaried);
console.log(notMariedStudents);


const pensininkai = students
    .filter(s => s.age >= 70);
console.log(pensininkai);