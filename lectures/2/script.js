/* функции генераторы

const menuItem = {
    color: 'blue',
    name: 'Catalog',
    makeRed: function () {
        this.color = 'red';
    }
};

function MenuItem (color = 'blue', name = 'Home') {
    this.color = color;
    this.name = name;
}

MenuItem.prototype.makeRed = function () {
    this.color = 'red';
}

function CatalogMenuItem (color, name) {
    MenuItem.call(this, color, name);
}

CatalogMenuItem.prototype = Object.create(MenuItem.prototype);

CatalogMenuItem.prototype.constructor = CatalogMenuItem;

*/

//  ES2015 Классы

class MenuItem {
    constructor(color = 'blue', name = 'Home') {
        this.color = color;
        this.name = name;
    }

    makeRed() {
        this.color = 'red';
    }
}

// Наследование
class CatalogMenuItem extends MenuItem {
    constructor (color, name, height = 70) {
        super(color, name);
        this.height = height;
        this.color = 'grey';
        this.background = 'white';
    }

    // Полиморфизм
    makeRed() {
        this.background = 'red';
    }
}

// Инкапсуляция
class Car {
    #fuel;

    constructor() {
        this.#fuel = 100;
    }

    drive() {
        if (this.#fuel < 10) {
            console.log('Error');
        } else {
            this.#fuel = this.#fuel -  10;
        }
    }

    get fuel () {
        console.log('getter fuel()');
        return `Осталось топлива: ${this.#fuel}%`;
    }

    set fuel (value) {
        if (value > 100) {
            this.#fuel = 100;
        } else if (value < 0) {
            this.#fuel = 0;
        } else {
            this.#fuel = value;
        }
    }
}
