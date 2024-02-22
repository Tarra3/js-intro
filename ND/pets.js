/*
- Pet (name, color), intro():
        - Dog (name, color, sound), intro()
                    - sound -> Double sound

 Cat (name, color), intro()

 Hamster (name, color), intro(), eat()
            - foodAmount
            - eat(): Mano burnoje siuo metu yra {{foodAmout++}} morku
*/

// intro(coco) {
//     return `${this.name}: Hi, I am ${this.color} hamster.`;


import { dogs } from "./dogs.js";
import { cats } from "./cats.js";
import { hamsters } from "./hamsters.js";

const coco = new hamsters('Coco', 'grey',);
console.log(coco.intro(hamsters));

const perla = new dogs('Perla', 'balta', 'au');
console.log(perla.intro(dogs));

const evil = new cats('Evil', 'black', 'miau');
console.log(evil.intro(cats));