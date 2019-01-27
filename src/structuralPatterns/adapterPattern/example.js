import {Cat,Animal} from './animals';
import AnimalCatAdapter from './aniamlCatAdapter';
import AniamlCatAdatper from './aniamlCatAdapter';

// the client wants to call makeSound() on the classes 
// but the cat class has meow() only we need some kind of wrapper (an adapter)

export default function() {
    
    // this is how we want use the cat class
    const animal = new Animal();
    animal.makeSound();

    const cat = new Cat();
    // cat.makeSound() we cant do this! and assume we cant modify cat class
    const adapter = new AniamlCatAdatper(cat);

    adapter.makeSound();

}