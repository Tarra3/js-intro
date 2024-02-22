

function biggest(list) {
    if (!Array.isArray(list)) {
        return 'ERROR: duok masyva';
    }


    if (list.length === 0) {
        return 'ERROR: tuscias masyvas';
    }

    let biggestNumber = list[0];

    for (const number of list) {
        if (number > biggestNumber) {
            biggestNumber = number;
        }
    }
    return biggestNumber;

}

console.log(biggest([1]));  // rezultatas: 1
console.log(biggest([1, 2, 3])); // rezultatas: 3
console.log(biggest([-5, 78, 14, 0, 18]));   // rezultatas: 78
console.log(biggest([69, 69, 69, 69, 66]));  // rezultatas: 69
console.log(biggest([-1, -2, -3, -4, -5, -6, -7, -8]));  // rezultatas: -1
console.log(biggest('pomidoras'));  // ERROR: duok masyva
console.log(biggest([])); // ERROR: tuscias masyvas
console.log(biggest([-5, 78, 14, Infinity, 18]));  // infinity


console.log(biggest([-1, -2, -3, -4, true])); // true


// Rekursija  