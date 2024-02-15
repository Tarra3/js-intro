/*
ARRAY - sarasas, masyvas, listas, zodynas, N-mate matrica, arejas
*/

// ()
// []
// {}

const empty = [];
console.log(empty);

const marks1 = [10, 2, 8, 4, 6];
console.log(marks1);

console.log('Pazymiu kiekis:', marks1.length); // =5
console.log('empty kiekis:', empty.length); //= 0

const students = ['Jonas', 'Maryte', 'Petras', 'Ona'];
console.log(students);
console.log('studentu kiekis:', students.length);

// lauztiniuose logina 0=10, 1=2, 2=8..seka ta kas const marks(10,2,8,4,6)
console.log(marks1[0], marks1[1], marks1[2]);
console.log(marks1[9999]);  // undefined
console.log(marks1[-1]);   // undefined
console.log(marks1[3.5]);  // undefined

// Gaunam studento 5 pazymiu masyva.
// Reikia suskaiciuoti pazymiu vidurki.

// lauztiniuose logina 0=10, 1=2, 2=8..seka ta kas const marks(10,2,8,4,6)
console.log(`-----------nuo--cia--------------`);
const marks = [10, 2, 8, 4, 6];
console.log(marks);

function marksAverage(marks) {
    // validacijos

    // logika
    // budas 1:const total = marks[0] + marks[1] + marks[2] + marks[3] + marks[4];

    // budas 2:let total = 0;   // 0
    // total = total + marks[0]; // = 0 + 10
    // total = total + marks[1]; // = 10 + 2
    // total = total + marks[2]; // = 12 + 8
    // total = total + marks[3]; // = 20 + 4
    // total = total + marks[4]; // = 24 + 6

    // budas 3:
    // let total = 0;   // 0
    // total += marks[0]; // = 0 + 10
    // total += marks[1]; // = 10 + 2
    // total += marks[2]; // = 12 + 8
    // total += marks[3]; // = 20 + 4
    // total += marks[4]; // = 24 + 6

    // budas 4:
    // let total = 0;
    // let i = 0;
    // console.log(i, total);

    // total += marks[i]; // t = 0+10
    // i += 1;            // i = 1
    // console.log(i, total);
    // total += marks[i]; // t = 10+2
    // i += 1;            // i = 2
    // console.log(i, total);
    // total += marks[i]; // t = 12+8
    // i += 1;            // i = 3
    // console.log(i, total);
    // total += marks[i]; // t = 20+4
    // i += 1;            // i = 4
    // console.log(i, total);
    // total += marks[i]; // t = 24+6 
    // i += 1;
    // console.log(i, total);

    // budas 5:
    // let total = 0;
    // let i = 0;

    // total += marks[i];
    // i++;
    // total += marks[i];
    // i++;
    // total += marks[i];
    // i++;
    // total += marks[i];
    // i++;
    // total += marks[i];
    // i++;

    // budas 6:
    let total = 0;
    let i = 0;

    total += marks[i++];
    total += marks[i++];
    total += marks[i++];
    total += marks[i++];
    total += marks[i++];

    //gale lieka:
    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
    }

    const count = marks.length;
    const result = total / count;


    // rezultato validacija

    // rezultato grazinimas
    return result;

}

console.log(marksAverage([10, 2, 8, 4, 6]), '->', 6);
console.log(marksAverage([10, 10, 10, 10, 10]), '->', 10);
console.log(marksAverage([1, 1, 1, 1, 1]), '->', 1);
console.log(marksAverage([1, 2, 3, 4, 5]), '->', 3);



