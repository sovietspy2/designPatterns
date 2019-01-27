
// very basic implementation
export default class Composite {
    constructor(parent, name) {
        if (!parent) {
            this.isRoot = true;
        }
        this.name = name;
        this.children = [];
    }

    add(name) {
        const child = new Composite(this, name);
        this.children.push(child);
        return child; // for testing
    }

    remove(name) {
        this.children = this.children.filter(child=> child.name !== name);
    }

    listChildren() {
        console.log(`Im ${this.name} and my child(ren) are: ${this.children}`);
        this.children.forEach(child => child.listChildren());
    }

    toString() {
        return this.name;
    }
}