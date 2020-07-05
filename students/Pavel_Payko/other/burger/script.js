// Класс гамбургера
class Hamburger {
    constructor({ title: size, price: p1, calories: c1 }, { title: stuffing, price: p2, calories: c2 }) {
        this.size = size,
            this.stuffing = stuffing,
            this.price = p1 + p2,
            this.calories = c1 + c2,
            this.toppings = []
    }
    addTopping({ title, price, calories }) {
        this.toppings.push(title);
        this.price += price;
        this.calories += calories
    }// Добавить добавку
    removeTopping({ title, price, calories }) {
        let rm = this.toppings.indexOf(title);
        // console.log(rm);
        this.toppings.splice(rm, 1);
        this.price -= price;
        this.calories -= calories
    }// Убрать добавку
    getToppings(topping) {
        let toLog = this.toppings.join(",");
        console.log(toLog)
    }// Получить список добавок 
    getSize() {
        console.log(this.size)
    }      // Узнать размер гамбургера
    getStuffing() {
        console.log(this.stuffing)
    }        // Узнать начинку гамбургера
    calculatePrice() {
        console.log(this.price)
    }       // Узнать цену 
    calculateCalories() {
        console.log(this.calories)
    }// Узнать калорийность
}

// Списки размеров и добавок
const size = [
    { title: 'small', price: 50, calories: 20 },
    { title: 'big', price: 50, calories: 20 }
];
const stuffing = [
    { title: 'cheess', price: 10, calories: 20 },
    { title: 'salad', price: 20, calories: 5 },
    { title: 'potatoes', price: 15, calories: 10 }
];
const topping = [
    { title: 'pepper', price: 15, calories: 0 },
    { title: 'mayo', price: 20, calories: 5 }
]

// примеры сборки гамбургера
let smallWithCheess = new Hamburger(size[0], stuffing[0]);
let smallWithSalad = new Hamburger(size[0], stuffing[1]);
let smallWithPotatoes = new Hamburger(size[0], stuffing[2]);

let bigWithCheess = new Hamburger(size[1], stuffing[0]);
let bigWithSalad = new Hamburger(size[1], stuffing[1]);
let bigWithPotatoes = new Hamburger(size[1], stuffing[2]);

let pepper = topping[0];
let mayo = topping[1];

smallWithPotatoes.addTopping(pepper);

bigWithCheess.addTopping(topping[1]);