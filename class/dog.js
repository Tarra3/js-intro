import Pet from './Pet.js';

class dog extends Pet {
    constructor(name, color, sound) {
        super(name, color, sound);
        this.breed = 'dog';
        this.sound = this.doubleSound(sound);

    }
    doubleSound(sound) {
        const str = `${sound} ${sound}`;
        return str[0].toUpperCase() + str.slice(1);
    }
}

export default dog;


//variantas 2:
// export default class dog{
//    ir cia info,
//}

// pirma versija:
//intro() {
//    return `${this.name}: Hi, I am ${this.color} dog. ${this.sound}.`;
//}

