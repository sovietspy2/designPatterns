export default class AniamlCatAdatper {

    constructor(cat) {
        this.cat = cat;
    }

    makeSound() {
        this.cat.meow();
    }

}