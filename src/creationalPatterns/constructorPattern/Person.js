export default class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        return `Hello my name is ${this.name}`; 
    }
}