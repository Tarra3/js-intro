class Pet {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.breed = 'pet';
        this.sound = 'Au miau niam';

    }
    intro() {
        return `${this.name}: Hi, I am ${this.color} ${this.breed}.${this.sound}!.`;
    }
}

export default Pet;
