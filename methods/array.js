/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

/*
.push() / .unshift() / .pop() / .shift / .at() / .concat / .includes / 
.indexOf / .join  / .reverse /  .slice / 
*/

// istraukia nurodyra nari:
console.log([10, 2, 8, 4, 6][0]);   //-> 10
console.log([10, 2, 8, 4, 6][1]);   //-> 2
console.log([10, 2, 8, 4, 6][2]);   //-> 8
console.log([10, 2, 8, 4, 6][3]);   //-> 4
console.log([10, 2, 8, 4, 6][4]);   //-> 6
console.log([10, 2, 8, 4, 6][5]);   //-> undefined

//             0   1  2  3  4
const marks = [10, 2, 8, 4, 6];
marks[1] = 5;
console.log(marks);    //->  [10, 5, 8, 4, 6] (2 pakeite i 5)

marks[4] = 9;
console.log(marks);    //->  [10, 5, 8, 4, 9] (6 pakeite i 9) 

//prideti i masyva naujas pos.:
marks[6] = 666;
console.log(marks); //-> [10, 5, 8, 4, 9, < 1 empty item >, 666]

marks[5] = 555;
console.log(marks);  //-> [10, 5, 8, 4, 9, 555, 666] 

console.clear();


// itraukti reiksmes:
const jonas = [];           //-> []
console.log(jonas);

jonas.push(10);            //-> [ 10 ]
console.log(jonas);

jonas.push(2);            //-> [10, 2]
console.log(jonas);

jonas.push(8);            //-> [ 10, 2, 8 ]
console.log(jonas);

jonas.push(4, 6);            //-> [ 10, 2, 8, 4, 6 ]
console.log(jonas);

jonas.push(1, 2, 3, 44, 55, 66);  //-> [ 10, 2, 8, 4, 6,1, 2, 3, 44, 55, 66]
console.log(jonas);

console.clear();


// unshift - deda reiksmes i prieki:
const maryte = [];      //-> []
console.log(maryte);

maryte.unshift(10);     //-> [ 10 ]
console.log(maryte);

maryte.unshift(2);      //-> [ 2, 10 ]
console.log(maryte);

maryte.unshift(8);      //-> [ 8, 2, 10 ]
console.log(maryte);

maryte.unshift(4, 6);    //-> [ 4, 6, 8, 2, 10 ]
console.log(maryte);

console.clear();


////////// .push() + .unshift() //////////////
const petras = [10];    //-> [ 10 ]
console.log(petras);

// petras.push(2);
// petras.unshift(8);
// console.log(petras);  //-> [ 8, 10, 2 ] 

petras.push(2, 3);
petras.unshift(8, 9);
console.log(petras);     //->[8, 9, 10, 2, 3]


// .pop() is masyvo pasalina paskutini nari: tik po viena

console.log(petras.pop());  //->  3 paraso kuri nari ismete
console.log(petras);        //-> [8, 9, 10, 2] ir paraso kas liko


petras.pop();          // neraso ka ismete, tik masyva be nario
console.log(petras);   //-> [8, 9, 10, 2]  


// .shift is mansyvo naikina narius nuo pradzios: tik po viena
petras.shift();
console.log(petras);    //->[9, 10]

console.log(petras.shift());   //->   9 <- paraso  kuri nari ismete
console.log(petras);            //->  [ 10 ] ir kas liko 



console.clear();

//            0  1  2  3  4
console.log([10, 2, 8, 4, 6].at(0));     //-> 10
console.log([10, 2, 8, 4, 6].at(1));     //-> 2
console.log([10, 2, 8, 4, 6].at(2));     //-> 8
console.log([10, 2, 8, 4, 6].at(3));     //-> 4
console.log([10, 2, 8, 4, 6].at(5));     //-> undefined
console.log([10, 2, 8, 4, 6].at(-1));    //-> 6
console.log([10, 2, 8, 4, 6].at(-2));    //-> 4
console.log([10, 2, 8, 4, 6].at(-3));    //-> 8

console.clear();


const vienas = [1, 1, 1];
const du = [2, 2, 2];
const trys = [3, 3, 3];

// sudeda masyvus:
const vienasDu = vienas.concat(du);
console.log(vienasDu);       //-> [ 1, 1, 1, 2, 2, 2 ] 

const vienasTrys = vienas.concat(trys);
console.log(vienasTrys);     //-> [1, 1, 1, 3, 3, 3]

const trysVienas = trys.concat(vienas);
console.log(trysVienas);      //-> [3, 3, 3, 1, 1, 1]

const trysVienasDu = trys.concat(vienas, du);
console.log(trysVienasDu);  //-> [ 3, 3, 3, 1,1,1, 2, 2, 2 ]

const trysVienasDuXXX = trys.concat(5, vienas, 7, du, 9);
console.log(trysVienasDuXXX);  //-> [3, 3, 3, 5, 1,1, 1, 7, 2, 2,2, 9]




//string:
// console.log('asdasd' + 'dsadsa'); // -> asdasddsadsa
// masyvas:
// console.log([1] + [2]);         // -> 12 kaip teksta logina
// console.log([111] + [222]);       // -> 111222 kaip teksta logina
// console.log([111, 333] + [222, 44]);    // -> 111, 333222, 44

console.clear();



//ar turi masyve ar ne 
console.log([10, 2, 8, 4, 6].includes(5));  //-> false (nera '5' masyve)
console.log([10, 2, 8, 4, 6].includes(8));  //-> true
console.log([10, 2, 8, 4, 6].includes(10)); //-> true
console.log([10, 2, 8, 4, 6].includes(2));  //-> true

console.log([10, 2, 8, 4, 6].indexOf(5));  //-> -1 (visais atvejais grazina kai neranda masyve)
console.log([10, 2, 8, 4, 6].indexOf(8));  //-> 2
console.log([10, 2, 8, 4, 6].indexOf(10)); //-> 0
console.log([10, 2, 8, 4, 6].indexOf(2));  //-> 1

console.clear();


//.join -stringai, su sk -nelogiska-
const john = ['j', 'jay', 'jail'];
console.log(john);         //-> [ 'j', 'jay', 'jail' ]
console.log(john.join());   //-> j,jay,jail
console.log(john.join(''));  //->  jjayjail (salyga:sujunk neiterpiant nieko)
console.log(john.join(', '));  //-> j, jay, jail
console.log(john.join('- '));   //-> j - jay - jail
console.log(john.join('-=- '));   //->j -= - jay-=- jail

console.clear();


// reverse:
const abc = ['a', 'b', 'c', 'd'];   //-> ['a', 'b', 'c', 'd']
console.log(abc);

abc.reverse();      //->  ['d', 'c', 'b', 'a']
console.log(abc);
//2kart reversint grazins pradine reiksme:
abc.reverse();      //->  [ 'a', 'b', 'c', 'd' ]
console.log(abc);

//             0      1        2         3           4
const ona = ['suo', 'kate', 'papuga', 'ziurkenas', 'sinsila'];
console.log(ona.slice());   //-> ['suo', 'kate', 'papuga', 'ziurkenas', 'sinsila']
console.log(ona.slice(2));  //-> ['papuga', 'ziurkenas', 'sinsila']
// nes papuga - index 2, ziurkenas - 3. iki nepaimant: 
console.log(ona.slice(2, 3)); //-> ['papuga']
console.log(ona.slice(1, -1)); //-> ['kate', 'papuga', 'ziurkenas']

//UZD1:
// duodamas tekstas, kuris turetu buti kaip vardas.
// bet jis suformatuotas padrikai..
// reikia duota teksta suformatuoti taip, jog butu tvarkingas vardas:

// pvz.: jonas -> Jonas
// pvz.: oNa -> Ona
// pvz.: PeTrAs -> Petras
// pvz.: Maryte -> Maryte

// stringe +array metodai


//UZD2:
//duodamas vardas ir pavarde, grazinti trumpini:

//pvz.: Chuck Norris -> C.N.
// funkcijos turi buti
// atsakymai exercises: name-format



