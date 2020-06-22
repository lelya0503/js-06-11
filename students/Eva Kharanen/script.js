const goods = [
    {title: 'Компьютер', price: 3500, img: 'img/mac.jpeg'},
    {title: 'Мышь', price: 99, img: 'img/mouse.jpeg'},
    {title: 'Клавиатура', price: 110, img: 'img/keyboard.jpeg'},
    {title: 'Монитор', price: 400, img: 'img/monitor.jpeg'},
];


const getGoodsItem = (title, price, img) => {
    return `<div class="goods-item">
                <h2 class="title">${title}</h2>
                <img class="img" src=${img} alt=${title} />
                <p class="price">${price} euro</p>
            </div>`;
};
const renderGoodsList = (list) => {
    const goodsList = list.map(listItem => getGoodsItem(listItem.title, listItem.price, listItem.img));
    document.querySelector('.goods-list').innerHTML = goodsList.join(' ');
}

class Basket {
    basketItems = [];

    addToTheBasket(product, amount) {
        this.basketItems.push(new BasketItem(product, amount))
    };
    removeFromTheBasket(removedBasketItem) {
        let removedIndex = this.basketItems.findIndex(basketItem => removedBasketItem === basketItem);
        this.basketItems.splice(removedIndex, 1);
    };

    getBasketItems(){
        return this.basketItems;
    }

    getTotalPrice(){
        let totalBasketSum = 0;
        this.basketItems.forEach(basketItem => totalBasketSum += basketItem.getTotalPrice())
        return totalBasketSum;
    }
    clearBasket() {
        this.basketItems = [];
    }

}

class Produckt {
    productId;
    productName;
    productPrice;

    constructor(id, name, price) {
        this.productId = id;
        this.productName = name;
        this.productPrice = price;
    }

    getProductPrice(){
        return this.productPrice
    }
    getProductName(){
        return this.productName
    }
    getProductId(){
        return this.productId
    }

}

class BasketItem {
    product;
    amount;

    constructor(product, amount) {
        this.product = product;
        this.amount = amount;
    }

    getTotalPrice() {
        let priceForProduct = this.product.getProductPrice() * this.amount
    }
}

class GoodsList {
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


    getTotalGoodsPrice(){
        let totalGoodsPrice = 0;
        this.goods.forEach( good => totalGoodsPrice += good.price)
        return totalGoodsPrice;
    }

    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
}



class Hamburger {
    type; // object like: {name: 'Большой', price: 100, ccal: 40}
    content = [];
    toppings = [];

    constructor(type, content) {
        this.type = type;
        this.content = content;
    }

    addTopping(topping){
        this.toppings.push(topping)
    }

    removeTopping(removedTopping){
        let index = this.toppings.findIndex(topping => topping === removedTopping)
        this.toppings.splice(index, 1)
    }

    getToppings(topping){
        return this.toppings;
    }

    getSize(){
        return this.type;
    }

    getStuffing(){
        return this.content;
    }

    calculatePrice(){
        let contentPrice = 0;
        let toppingPrice = 0;
        this.content.forEach(contentItem => contentPrice += contentItem.price)
        this.toppings.forEach(toppingItem => toppingPrice += toppingItem.price)
        return this.type.price + contentPrice + toppingPrice;
    }

    calculateCalories(){
        let contentCcal = 0;
        let toppingCcal = 0;
        this.content.forEach(contentItem => contentCcal += contentItem.calories)
        this.toppings.forEach(toppingItem => toppingCcal += toppingItem.calories)
        return this.type.calories + contentCcal + toppingCcal;
    }
}