export default class Counter {

    constructor() {

        if (!Counter.instance) {
            this.data = 0;
            Counter.instance=this;
        }
        return Counter.instance;
    }

    add() {
        this.data= this.data + 1;
    }

    //... other methods
}