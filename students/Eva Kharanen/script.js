let sendGETRequest = (url, method = 'GET', payload = {}) => {
    return new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = () => {
            resolve(JSON.parse(xhr.responseText))
        }

        xhr.open('GET', url, true);
        xhr.send(payload);
    })
}

const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

// корзина
class Basket {
    constructor() {
        this.basketItems = [];
        this.getBasketItems();
    }

    getBasketItems() {
        new Promise((resolve, reject) => {
            sendGETRequest(`${API_URL}/getBasket.json`)
                .then((res) => {
                    this.basketItems = res;
                    this.render();
                    resolve();
                });
        })
    }

    addToTheBasket(item) {
        sendGETRequest(`${API_URL}/addToBasket.json`, 'GET', {item})
            .then((res) => {
                const {result} = res;
                console.log(res)
                if (result === 1) {
                    this.basketItems.push(item)
                    console.log(this.basketItems)
                } else {
                    console.log('error push')
                }
            })
    };

    removeFromTheBasket(removedBasketItem) {
        sendGETRequest(`${API_URL}/deleteFromBasket.json`, 'DELETE', {removedBasketItem})
            .then((res) => {
                const {result} = JSON.parse(res);
                if (result === 1) {
                    let removedIndex = this.basketItems.findIndex(basketItem => removedBasketItem === basketItem);
                    if (removedIndex !== -1) {
                        this.basketItems.splice(removedIndex, 1);
                    }
                } else {
                    console.log('error delete')
                }
                this.render()
            })
    };

    getTotalPrice() {
        let totalBasketSum = 0;
        this.basketItems.forEach(basketItem => totalBasketSum += basketItem.getTotalPrice())
        return totalBasketSum;
    }

    clearBasket() {
        this.basketItems = [];
    }


    render() {
        this.el = document.getElementsByClassName('basket-block')
        this.el.innerHTML = this.template


    }
}

let btnBasket = document.getElementsByClassName('cart-button');
btnBasket.addToTheBasket;

const basketList = new Basket;

//товар, который лежит в корзине

class BasketItem {
    constructor(product, price) {
        this.product = product_name;
        this.price = price;
    }
    render() {
        return `<h2 class="title">${this.product_name}</h2>
                <p class="price">${this.price} euro</p>`;
    }
}

// ответ с сервера, запрошенный товар, его отображение на странице

class Produckt {
    constructor(product_name, price) {
        this.product_name = product_name;
        this.price = price;
    }

    getProductPrice() {
        return this.price
    }

    getProductName() {
        return this.product_name
    }

    render() {
        return `<div class="goods-item" data-title="${this.product_name}" data-price="${this.price}">
                <h2 class="title">${this.product_name}</h2>     
                <p class="price">${this.price} euro</p>
                <button class="btn">добавить в корзину</button>
                </div>`;
    }
}

// запрос на сервер

class GoodsList {
    constructor() {
        this.goods = [];
    }

    fetchGoods() {
        sendGETRequest(`${API_URL}/catalogData.json`).then(goods => {
            this.goods = goods;
            this.render();
        })
    }

    getTotalGoodsPrice() {
        let totalGoodsPrice = 0;
        this.goods.forEach(good => totalGoodsPrice += good.price)
        return totalGoodsPrice;
    }

    render() {
        let listHtml = '';
        this.goods.forEach(({product_name, price}) => {
                const item = new Produckt(product_name, price)
                listHtml += item.render()
            }
        )
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
}

const list = new GoodsList;
list.fetchGoods(() => list.render())

// гамбургер

class Hamburger {
    type; // object like: {name: 'Большой', price: 100, ccal: 40}
    content = [];
    toppings = [];

    constructor(type, content) {
        this.type = type;
        this.content = content;
    }

    addTopping(topping) {
        this.toppings.push(topping)
    }

    removeTopping(removedTopping) {
        let index = this.toppings.findIndex(topping => topping === removedTopping)
        this.toppings.splice(index, 1)
    }

    getToppings(topping) {
        return this.toppings;
    }

    getSize() {
        return this.type;
    }

    getStuffing() {
        return this.content;
    }

    calculatePrice() {
        let contentPrice = 0;
        let toppingPrice = 0;
        this.content.forEach(contentItem => contentPrice += contentItem.price)
        this.toppings.forEach(toppingItem => toppingPrice += toppingItem.price)
        return this.type.price + contentPrice + toppingPrice;
    }

    calculateCalories() {
        let contentCcal = 0;
        let toppingCcal = 0;
        this.content.forEach(contentItem => contentCcal += contentItem.calories)
        this.toppings.forEach(toppingItem => toppingCcal += toppingItem.calories)
        return this.type.calories + contentCcal + toppingCcal;
    }
}