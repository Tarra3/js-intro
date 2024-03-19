/*
FOR - ciklas (pagrindinis)
*/
// `use strict`; 

let a = 0;

a += 2;
a += 2;
a += 2;
a += 2;
a += 2;
a += 2;
console.log(a);  // logina 12


// dalis 'i < 5' reiskia 'i' didins iki kol ats bus maziau nei 5.
// + dalis 'i < 5' gali buti 'i <= 5' '>=' .. 
// dalis 'let i = 0' koki skaiciu irasysi vietoj 0 nuo tokio skaiciuos.
// dalis 'i++' gali buti 'i+=2' kels vis 2...

console.log('START')
for (let i = 0; i < 5; i++) {
    console.log(i); //  01234  stulpelis
}
console.log('END')

/////////////////////////////////////////////////////
console.clear();

const marks = [10, 2, 8, 4, 6, 10];

let sum = 0;


for (let i = 0; i < marks.length; i++) {
    console.log(i, marks[i]); // logina stulpeli: paduota 10, 2, 8, 4, 6, 10

    //sum += marks[i];
}
/*
//console.log('SUM:', sum, sum / marks.length);

// 'SUM:', sum, -> SUM: 40 (logina suma)
// sum / marks.length -> logina vidurki


console.clear();


let k = 2;
for (let i = 0; i + k < 5; i++) {
    console.log(i);
}

//k=2 i=0 i+k=2<5=true -> logina 0
//k=2 i=1 i+k=3<5=true -> logina 1
//k=2 i=2 i+k=4<5=true -> logina 2
//k=2 i=3 i+k=5<5=false -> nelogina  
*/