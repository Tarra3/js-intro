/*
Animals
*/

import dog from "./dog.js";

const rexas = new dog('Rexas', 'brown', 'au');
const brisius = new dog(`Brisius`, 'white', 'au');
console.log(rexas.intro());
console.log(brisius.intro());


import cat from "./cat.js";

const pukis = new cat('Pukis', 'white', 'miau');
const garfildas = new cat(`Garfildas`, 'ginger', 'miau');
console.log(pukis.intro());
console.log(garfildas.intro());


import hamster from "./hamster.js";

const coco = new hamster('Coco', 'black', 'niam');
console.log(coco.intro());
