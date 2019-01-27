import personFactory from './personFactory';

const example =  () => {
    const man = personFactory('Validimr', 'russian spy', '39', false);
    man.work();
};


export default example;