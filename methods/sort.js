const abc = ['a', 'b', 'c', 'z', 'f', 's'];
abc.sort();
abc.sort().reverse();

console.log(abc);


const marks = [300, 10, 2, 4, 22, 30, 25, 6, 8, 0];
marks.sort();
marks.sort((a, b) => a - b);
// marks1.sort((a, b) => b - a) = abc.sort().reverse() - is kitos puses logins
console.log(marks);


const students = [
    { name: 'Jonas', age: 99, isMaried: true, marks: [10, 2, 8, 4, 6], marksCount: 5 },
    { name: 'Maryte', age: 88, isMaried: false, marks: [7, 7, 7] },
    { name: 'Petras', age: 77, isMaried: false, marks [7, 6, 5, 4, 3] },
    { name: 'Ona', age: 66, isMaried: true, marks: [1] },
];

// reikia apskaiciuoti kiekvieno studento pazymiu kieki ir tai prideti kaip
// nauja studento objekto rakta (marksCount);

// reikia apskaiciuoti kiekvieno studento pazymiu vidurki ir tai prideti kaip
// nauja studento objekto rakta (marksAvarage);

// reikia rasti kiekvieno studento maziausia pazymi  ir tai prideti kaip
// nauja studento objekto rakta (minMark);

// reikia rasti kiekvieno studento didziausia pazymi ir tai prideti kaip
// nauja studento objekto rakta (maxMark);

// reikia sudaryti studentu sarasa (pilni objektai), kuriu pazymiu vidurkis yra
//didesnis uz 5.

//reikia sudaryti studentu vardu sarasa, kuriu pazymiu vidurkis yra didesnis uz 5.



// students.sort((a, b) => a.age - b.age); // pagal age sortins
// students.sort((a, b) => a.name - b.name); // pagal varda abcle


students.sort((a, b) => a.name === b.name ? 0 : a.name < b.name ? -1 : 1);

console.log(students);