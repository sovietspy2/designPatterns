import Person from "./Person";


const constructorPattern= function() {
    const person = new Person("Peter");
    console.log(person.getDetails());
};

export default constructorPattern;