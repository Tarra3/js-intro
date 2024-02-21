//budas 1:
// const student = {
//     name: 'Jonas',
//     age: 99,
//     isMarried: true,
// };
//console.log(student.name);
//console.log(student.age);
//console.log(student.isMarried);


//budas 2:
// const student = {
//     'name': 'Jonas',
//     'age': 99,
//     'isMarried': true,
// };
// console.log(student['name']);
// console.log(student['age']);
// console.log(student['isMarried']);


const student = {
    name: 'Jonas',
    age: 99,
    isMarried: true,
};


const noriuSuzinoti = 'name';
// const noriuSuzinoti = 'age';
// const noriuSuzinoti = 'isMarried';


const name = student[noriuSuzinoti];
// t.y. const name = student['name'];
// veikia ir:  const name = student.name;
console.log(name);
// console.log('ewre'.length) - logins skaiciu raidziu t.y. -4;
// console.log([10, 55].length) - logins skaiciu skaitmenu - 2;
// console.log('age'.length) - logins 3 -kiek zodis age turi simboliu;
//console.log(isMaried


const keys = Object.keys(student) // islogins [ 'name', 'age', 'isMarried' ];
console.log(keys);

const keysCount = Object.keys(student).length; // islogins 3-kiek keys yra
console.log(keysCount);

console.log('-------------------------------');

const car = {
    brand: 'Audi',
    model: 80,
    color: 'red',
    price: 300,
}


const carKeys = Object.keys(car);
console.log(carKeys); //islogina [ 'brand', 'model', 'color', 'price' ];

//1:
for (let i = 0; i < carKeys.length; i++) {
    const key = carKeys[i];
    const value = car[key];
    console.log(i, key, value);
}
// console.log(car.color); // car.model/ car.price... islogina atskirai;


//2: for-in:
for (const key in car) {
    const value = car[key];
    console.log(key, value);
}
