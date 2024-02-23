
function formatName(text) {
    const firstLetter = text[0].toUpperCase();
    const otherLetters = text.slice(1).toLowerCase();

    return firstLetter + otherLetters;
}
//arba:  return text[0].toUpperCase() +text.slice(1).toLowerCase();

console.log(formatName('jonas'), '->', 'Jonas');
console.log(formatName('oNa'), '->', 'Ona');
console.log(formatName('PeTrAs'), '->', 'Petras');
console.log(formatName('Maryte'), '->', 'Maryte');

//duodamas vardas ir pavarde, grazinti trumpini:
//1budas:
// const name = 'Chuck Noris';
// const parts = name.split(' ');
//kaip veikia:bet be sitos dalies iki tarpo daryt galima:
// console.log(parts); ->  [`Chuck`, `Noris`]
// console.log(parts[0]); ->  Chuck
// console.log(parts[0][0]); -> C
// console.log(parts[1]); ->  Noris
// console.log(parts[1][0]); -> N

// const abbr = `${parts[0][0]}. ${parts[1][0]}.`;
// console.log(abbr);                               //-> C. N. 

//2budas:
function abbbr(name) {
    const parts = name.split(' ');
    return `${parts[0][0]}.${parts[1][0]}.`;
}
console.log(abbbr('Chuck Noris')); //-> C. N
console.log(abbbr('Pamela Anderson'));  // => P.A.

//3budas:
function abrrr(name) {
    const parts = name.split(' ');
    let result = '';
    for (const word of parts) {
        result += `${word[0]}.`;
    }
    return result;
}
console.log(abrrr('Zan Klod Van Dam')); // => Z.K.V.D. 



