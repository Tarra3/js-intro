

//n-> string-> split ->array ->for ->skaitmens zodis -> ats.

//'' + n; sis skaiciaus i teksta
//const index = +number; is teksto i skaiciu
// const text = '' + n;   // const text = n.toString - tas pats ats bus.
// const index = parseInt(number);  //const = +number - tas pats ats.
console.log('---------------11111111-----------------');

// 1 budas:
function numberName(n) {
    const dictionary = [
        'zero', 'one', 'two', 'three', 'four',
        'five', 'six', 'seven', 'eight', 'nine',
    ];
    const text = '' + n;
    const numbers = text.split('');
    const result = [];

    for (const number of numbers) {
        const index = parseInt(number);
        result.push(dictionary[index]);
    }

    return result.join(' ');
}

console.log(numberName(0), '-->', 'zero');
console.log(numberName(1), '-->', 'one');
console.log(numberName(9), '-->', 'nine');

console.log(numberName(19)); // -> one nine
console.log(numberName(377)); //->three seven seven
console.log(numberName(5801)); // -> five eight zero one 

console.log('---------------222222-----------------');

// 2 budas:
function numberNameAscii(n) {
    const dictionary = [
        'zero', 'one', 'two', 'three', 'four',
        'five', 'six', 'seven', 'eight', 'nine',
    ];
    const text = '' + n;
    const result = [];

    for (const symbol of text) {
        const index = symbol.charCodeAt(0) - 48;
        result.push(dictionary[index]);
    }
    return result.join(' ');

}

console.log(numberNameAscii(1234567890));


console.log(numberNameAscii(19));   // -> one nine
console.log(numberNameAscii(377)); //->three seven seven
console.log(numberNameAscii(5801));; // -> five eight zero one 


console.log('---------------333333-----------------');
// 3 budas:
function numberNameLoop(n) {
    const dictionary = [
        'zero', 'one', 'two', 'three', 'four',
        'five', 'six', 'seven', 'eight', 'nine',
    ];
    const result = [];

    while (n / 10 > 0) {
        result.unshift(dictionary[n % 10]);
        n = ((n - n % 10) / 10);

    }

    return result.join(' ');
}
console.log(numberNameLoop(1234567890)); //->zodziais skaiciai
console.log(numberNameLoop(19)); // -> one nine
console.log(numberNameLoop(377)); //->three seven seven
console.log(numberNameLoop(5801)); // -> five eight zero one


