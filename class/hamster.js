import Pet from './Pet.js';

class hamster extends Pet {
    constructor(name, color) {
        super(name, color);
        this.breed = 'hamster';
        this.sound = 'nom nom';


    }
}
export default hamster;



// pirma versija
//intro() {
//    return `${this.name}: Hi, I am ${this.color} hamster. ${this.sound}.`;
//}