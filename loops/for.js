/*
FOR - ciklas (pagrindinis)
*/

let a = 0;

a += 2;
a += 2;
a += 2;
a += 2;
a += 2;
a += 2;
console.log(a);


// dalis 'i < 5' reiskia 'i' didins iki kol ats bus maziau nei 5.
// + dalis 'i < 5' gali buti 'i <= 5' '>=' .. 
// dalis 'let i = 0' koki skaiciu irasysi vietoj 0 nuo tokio skaiciuos.
// dalis 'i++' gali buti 'i+=2' kels vis 2...

console.log('START')
for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log('END')
