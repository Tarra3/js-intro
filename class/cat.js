import Pet from './Pet.js';

class cat extends Pet {
    constructor(name, color, sound) {
        super(name, color, sound);
        this.name = name;
        this.color = color;
        this.sound = sound;
    }
    intro() {
        return `${this.name}: Hi, I am ${this.color} cat. ${this.sound}.`;
    }
}

export default cat;