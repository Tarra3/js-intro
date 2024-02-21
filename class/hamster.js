import Pet from './Pet.js';

class hamster extends Pet {
    constructor(name, color, sound) {
        super(name, color, sound);
        this.name = name;
        this.color = color;
        this.sound = sound;
    }
    intro() {
        return `${this.name}: Hi, I am ${this.color} hamster. ${this.sound}.`;
    }
}
export default hamster;