class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        return `Hello my name is ${this.name}`; 
    }
}

class Man extends Person {

    constructor(name, age, profession) {
        super(name,age);
        this.profession = profession;
    }

    work() {
        console.log(`My profession is: ${this.profession}!`);
    }
}


class Woman extends Man{
    constructor(name,age,profession) {
        super(name, age, profession);
    }

    cook() {
        console.log(`I can do everything plus cook`);
    }
}


// not so great example
const personFactory = function(name='unnamed person', profession='none', age=0, canCook=false) {
    if (canCook) {
        return new Woman(name,age,profession)
    } else {
        return new Man(name,age,profession);
    }
};

export default personFactory;