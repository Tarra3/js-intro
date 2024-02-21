import Pet from './Pet.js';

class dog extends Pet {
    constructor(name, color, sound) {
        super(name, color, sound);
        this.name = name;
        this.color = color;
        this.sound = sound;
    }
    intro() {
        return `${this.name}: Hi, I am ${this.color} dog. ${this.sound}.`;
    }
}

export default dog;

//variantas 2:
// export default class dog;


