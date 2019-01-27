import Planet from './planet';

const example = function() {

    const earth = new Planet(0.23212454232); 

    const moon = Object.create(earth, {name: {value: 'pluto'}});

    console.log(moon.name);
    moon.doPlanetStuff();


};

export default example;