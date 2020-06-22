class ProductItem {
    constructor(good) {
        this.title = good.title;
        this.price = good.price;
    }
    render() {
        return `<div class="product_item">
                    <div class="product_img"></div>  
                    <h3>${this.title}</h3>
                    <p>${this.price}</p>
                </div>`;
    }
}
class ProductList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [
            { title: 'Shirt', price: 150 },
            { title: 'Socks', price: 50 },
            { title: 'Jacket', price: 350 },
            { title: 'Shoes', price: 250 },
        ];
    }
    summary() {
        let bagSumm = 0;
        this.goods.forEach(good => {
           bagSumm += good.price;
        });
        document.querySelector('#bag_summ').innerText = bagSumm;
        // Тот самый метод определяющий суммарную стоимость всех товаров
    }
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new ProductItem(good);
            listHtml += goodItem.render();
        });
        document.querySelector('.product_container').innerHTML = listHtml;
    }
}

class BagItem {
    constructor(good) {
        this.title = good.title;
        this.price = good.price;
    }
    render() {
        return  ``
        // Здесь отрисовка html для одного из товаров корзины. Аналогично с ProductItem.render()
    }
}
class BagList {
    constructor() {
        this.inBag = [];
    }
    addGoods(good) {
        this.inBag.push({title: good.title, price: good.price});
        // Это метод для добавления товара в список корзины
    }
    delGoods(good) {
        const index = this.inBag.indexOf({title: good.title, price: good.price});
        if (index > -1) {
            this.inBag.splice(index-1,1);
        } else {
            console.log("smth wrong");
        }
        // Это метод для удаления товара из корзины
        // В общем это не пашет, почему так и не понял. Решил остановиться, ибо в будущем будет более понятно
        // как мы будем взаимодействовать с этим методом. Например я смогу брать сразу index элемента на котором нажали удалить.
    }
    summary() {
        let bagSumm = 0;
        this.inBag.forEach(good => {
            bagSumm += good.price;
        });
        // Это метод для подсчёта общей суммы заказа
    }
    render() {
        // Здесь отрисовка html для всей корзины. Аналогично с ProductList.render()
    }
}

const list = new ProductList();
list.fetchGoods();
list.render();

const bag = new BagList();
bag.addGoods({title: "Necklaces", price: 231});
bag.addGoods({title: "Hats", price: 183});
bag.addGoods({title: "Socks", price: 160});
// Тест для методов BagList (Корзины)

class Hamburger {
    constructor (size = "small", stuff = "cheese", mayo = false, spices = false) {
        if (size === "small" || size === "big") {this.size = size } else { this.size = "small"}
        if (stuff === "cheese" || stuff === "salat" || stuff === "potato") {this.stuff = stuff } else { this.stuff = "cheese"}
        if (mayo === true) {this.mayo = mayo } else { this.mayo = false}
        if (spices === true) {this.spices = spices } else { this.spices = false}
        // Интересно конечно, есть ли более адекватный способ проверять входные параметры или нет? =)
    }
    addTopping(topping) {
        switch (topping) {
            case "mayo":
                this.mayo = true;
                break;
            case "spices":
                this.spices = true;
                break;
        }
    }
    removeTopping(topping) {
        switch (topping) {
            case "mayo":
                this.mayo = false;
                break;
            case "spices":
                this.spices = false;
                break;
        }
    }
    getToppings() {
        return "mayo"+ ", " + "spices";
    }
    getSize() {
        return this.size;
    }
    getStuff() {
        let nav = [];
        nav.push(this.stuff);
        if (this.mayo) {nav.push("mayo")}
        if (this.spices) {nav.push("spices")}
        return nav;
    }
    calcPrice() {
        let price = 0;
        if (this.size === "small") {price += 100} else {price += 50}
        if (this.stuff === "cheese") {price += 10}
        if (this.stuff === "salat") {price += 20}
        if (this.stuff === "potato") {price += 15}
        if (this.mayo) {price += 20}
        if (this.spices) {price += 15}
        return price
    }
    calcCcal() {
        let ccal = 0;
        if (this.size === "small") {ccal += 20} else {ccal += 40}
        if (this.stuff === "cheese") {ccal += 20}
        if (this.stuff === "salat") {ccal+= 5}
        if (this.stuff === "potato") {ccal += 10}
        if (this.mayo) {ccal += 5}
        if (this.spices) {ccal += 0}
        return ccal
    }
}

const yam = new Hamburger("small", "potato", true, false);
yam.addTopping("spices");
yam.removeTopping("spices");
yam.getToppings();
yam.getSize();
yam.getStuff();
yam.calcCcal();
yam.calcPrice();
// Методы для проверки