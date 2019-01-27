import Composite from './composite';

export default () => {
    const root = new Composite(null,'root');
    root.listChildren();

    root.add("one");
    let firstLvlChild = root.add("two");

    firstLvlChild.add('three');
    root.listChildren();

    
    root.remove('one');
    root.remove('two');
    root.listChildren();
};