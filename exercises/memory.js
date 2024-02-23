
// Dirbant su primityviais duomenu tipais
let a = 7;
const b = a;
console.log(a, b); //-> 7 7

a = 5;
console.log(a, b);  //-> 5 5

// Dibant su kompleksiniais duomenu tipais
const c = [1, 2];
const d = c;
console.log(c, d);    //-> [1, 2][1, 2]

c[0] = 777;       //over writina c pirma sk. '1' i '777'
console.log(c, d);   //-> [777, 2][777, 2]

