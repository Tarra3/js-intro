/*
BOOLEAN - logine reiksme

Galimos reiksmes:
    -true
    -fals

Loginiai operatoriai:
- && (and)
- || (or)
- ! (not invert)
    */


console.log((true && true) || (false && false));
//                 1       3         2


// 128 kombinacijos keturgubos
console.log("---------namu-darbai----------------");

console.log(true && true && true && true, '->', true);
console.log(false && false && false && false, '->', false);
console.log(true || true || true || true, '->', true);
console.log(false || false || false || false, '->', false);
console.log(true && true && true || true, '->', true);
console.log(false && false && false || false, '->', false);

console.log("---------namu-darbai-1---------------");

console.log(true && true && true && false, '->', false);
console.log(true || true || true || false, '->', true);
console.log(true && true && true || false, '->', true);
console.log(true || true || true && false, '->', true);
console.log(true || true && true && false, '->', true);
console.log(true && true || true || false, '->', true);
console.log(true && true || true && false, '->', true);
console.log(true || true && true || false, '->', true);

console.log("---------namu-darbai-2---------------");

console.log(false && false && false && true, '->', false);
console.log(false || false || false || true, '->', true);
console.log(false && false && false || true, '->', true);
console.log(false || false || false && true, '->', false);
console.log(false && false || false || true, '->', true);
console.log(false || false && false && true, '->', false);
console.log(false && false || false && true, '->', false);
console.log(false || false && false || true, '->', true);

console.log("---------namu-darbai-3---------------");

console.log(true && false && false && false, '->', false);
console.log(true || false || false || false, '->', true);
console.log(true && false && false || false, '->', false);
console.log(true || false || false && false, '->', true);
console.log(true && false || false || false, '->', false);
console.log(true || false && false && false, '->', true);
console.log(true && false || false && false, '->', false);
console.log(true || false && false || false, '->', true);

console.log("---------namu-darbai-4---------------");

console.log(false && true && true && true, '->', false);
console.log(false || true || true || true, '->', true);
console.log(false && true && true || true, '->', true);
console.log(false || true || true && true, '->', true);
console.log(false && true || true || true, '->', true);
console.log(false || true && true && true, '->', true);
console.log(false && true || true && true, '->', true);
console.log(false || true && true || true, '->', true);

console.log("---------namu-darbai-5---------------");

console.log(false && true && false && false, '->', false);
console.log(false || true || false || false, '->', true);
console.log(false && true && false || false, '->', false);
console.log(false || true && false && false, '->', false);
console.log(false && true || false || false, '->', false);
console.log(false || true && false && false, '->', false);
console.log(false && true || false && false, '->', false);
console.log(false || true && false || false, '->', false);

console.log("---------namu-darbai-6---------------");

console.log(true && false && true && true, '->', false);
console.log(true || false || true || true, '->', true);
console.log(true && false && true || true, '->', true);
console.log(true || false || true && true, '->', true);
console.log(true && false || true || true, '->', true);
console.log(true || false && true && true, '->', true);
console.log(true && false || true && true, '->', true);
console.log(true || false && true || true, '->', true);

console.log("---------namu-darbai-7---------------");

console.log(false && false && true && false, '->', false);
console.log(false || false || true || false, '->', true);
console.log(false && false && true || false, '->', false);
console.log(false || false || true && false, '->', false);
console.log(false && false || true || false, '->', true);
console.log(false || false && true && false, '->', false);
console.log(false && false || true && false, '->', false);
console.log(false || false && true || false, '->', false);

console.log("---------namu-darbai-8---------------");

console.log(true && true && false && true, '->', false);
console.log(true || true || false || true, '->', true);
console.log(true && true && false || true, '->', true);
console.log(true || true || false && true, '->', true);
console.log(true && true || false || true, '->', true);
console.log(true || true && false && true, '->', true);
console.log(true && true || false && true, '->', true);
console.log(true || true && false || true, '->', true);

console.log("---------namu-darbai-9---------------");

console.log(false && false && true && true, '->', false);
console.log(false || false || true || true, '->', true);
console.log(false && false && true || true, '->', true);
console.log(false || false || true && true, '->', true);
console.log(false && false || true || true, '->', true);
console.log(false || false && true && true, '->', false);
console.log(false && false || true && true, '->', true);
console.log(false || false && true || true, '->', true);

console.log("---------namu-darbai-10---------------");

console.log(true && true && false && false, '->', false);
console.log(true || true || false || false, '->', true);
console.log(true && true && false || false, '->', false);
console.log(true || true || false && false, '->', true);
console.log(true && true || false || false, '->', true);
console.log(true || true && false && false, '->', true);
console.log(true && true || false && false, '->', true);
console.log(true || true && false || false, '->', true);

console.log("---------namu-darbai-11---------------");

console.log(true && false && false && true, '->', false);
console.log(true || false || false || true, '->', true);
console.log(true && false && false || true, '->', true);
console.log(true || false || false && true, '->', true);
console.log(true && false || false || true, '->', true);
console.log(true || false && false && true, '->', true);
console.log(true && false || false && true, '->', false);
console.log(true || false && false || true, '->', true);

console.log("---------namu-darbai-12---------------");

console.log(false && true && true && false, '->', false);
console.log(false || true || true || false, '->', true);
console.log(false && true && true || false, '->', false);
console.log(false || true || true && false, '->', true);
console.log(false && true || true || false, '->', true);
console.log(false || true && true && false, '->', false);
console.log(false && true || true && false, '->', false);
console.log(false || true && true || false, '->', true);

console.log("---------namu-darbai-13---------------");

console.log(true && true && false && false, '->', false);
console.log(true || true || false || false, '->', true);
console.log(true && true && false || false, '->', false);
console.log(true || true || false && false, '->', true);
console.log(true && true || false || false, '->', true);
console.log(true || true && false && false, '->', true);
console.log(true && true || false && false, '->', true);
console.log(true || true && false || false, '->', true);

console.log("---------namu-darbai-14---------------");

console.log(false && false && true && true, '->', false);
console.log(false || false || true || true, '->', true);
console.log(false && false && true || true, '->', true);
console.log(false || false || true && true, '->', true);
console.log(false && false || true || true, '->', true);
console.log(false || false && true && true, '->', false);
console.log(false && false || true && true, '->', true);
console.log(false || false && true || true, '->', true);





