export default class {
    constructor(name) {
        this.name = name || 'Unnamed';
    }

    static createDefault() {
        return new this('DefaultInstance');
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    greet() {
        return `Hello, ${this.name}!`;
    }
}

export function sayHello(name) {
    return `Hello, ${name}`;
}