import Counter from "./counter";

const singletonExample = function() {
    let counter = new Counter();

    counter.add();
    counter.add();

    console.log(counter.data);

    let counter2 = new Counter();
    console.log(counter2.data);

    console.log(counter===counter2);


};

export default singletonExample;