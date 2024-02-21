
const students = [
    { name: 'Jonas', age: 99, isMarried: true },
    { name: 'Maryte', age: 88, isMarried: false },
    { name: 'Petras', age: 77, isMarried: false },
    { name: 'Ona', age: 66, isMarried: true },

];

//variantas 1
for (let i = 0; i < students.length; i++) {
    const student = students[i];
    console.log(`${student.name}: ${student.age}`);
}
console.log(students[1]); //vienam isloginti 

//variantas 2
for (const student of students) {
    console.log(`${student.name}: ${student.age}`);
}
//                0  1  2  3  4   narys       
const numbers = [10, 2, 8, 4, 6];
//1 budas
for (let i = 0; i < numbers.length; i++) {  //i+=2 kas antra imtu sk.
    const number = numbers[i];
    console.log(`+++`, number);
}
//2 budas 
for (const number of numbers) {
    console.log(`+++`, number);
}

console.log('----111111111-----------');

const text = 'Pomidoras';
//1
for (let i = 0; i < text.length; i++) {
    const letter = text[i];
    console.log(i, letter);
}
//2
console.log('------------22222-----------');
for (const letter of text) {
    console.log(letter);
}