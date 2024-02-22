// vietoj:
// for (const number of list) {
//     if (typeof number !== 'number' || !isFinite(number)) {
//         continue;
// gali buti: 
// for (const number of list) {
//       if (typeof number !== 'number'
//          || number === Infinity
//          || number === -Infinity
//          || isNaN(number)) {
// continue;
//  }


function biggest(list) {
    if (!Array.isArray(list)) {
        return 'ERROR: duok masyva';
    }
    if (list.length === 0) {
        return 'ERROR: tuscias masyvas';
    }

    let biggestNumber = -Infinity;

    for (const number of list) {
        if (typeof number !== 'number' || !isFinite(number)) {
            continue;
        }
        if (number > biggestNumber) {
            biggestNumber = number;
        }
    }

    if (biggestNumber === -Infinity) {
        return 'ERROR: masyve nerasta nei vieno normalaus skaiciaus';
    }

    return biggestNumber;
}

console.log(biggest(['labas', true, biggest, {}, null, undefined])) //error..
console.log(biggest([1]));  // rezultatas: 1
console.log(biggest([1, 2, 3])); // rezultatas: 3
console.log(biggest([-5, 78, 14, 0, 18]));   // rezultatas: 78
console.log(biggest([69, 69, 69, 69, 66]));  // rezultatas: 69
console.log(biggest([-1, -2, -3, -4, -5, -6, -7, -8]));  // rezultatas: -1
console.log(biggest('pomidoras'));  // ERROR: duok masyva
console.log(biggest([])); // ERROR: tuscias masyvas
console.log(biggest([-5, 78, 14, Infinity, 18]));  // 78
console.log(biggest([-1, -2, -3, -4, true])); // -1

//'ERROR: duok masyva' visiem logina: 
console.log(biggest('pomidoras'));
console.log(biggest(2154));
console.log(biggest(true));
console.log(biggest(biggest));
console.log(biggest(null));
console.log(biggest({}));
console.log(biggest());
console.log(biggest(undefined));
console.log(biggest([]));


// Rekursija:   [[[[[[[]]]]]]]
//console.log(biggest([-5, [[78], 14], 0, 18]));kad islogintu masyvus masyvuose
