'use strict';
const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

function sendRequest(url, method = 'GET', payload = {}) {
    return new Promise((resolve, reject) => {


        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(xhr.responseText);
                } else {
                    reject(xhr.responseText)
                }

            }
        };

        xhr.open('GET', `${API}${url}`, true);
        xhr.send(payload);
    })

}

class GoodsItem {
    constructor(product_name, price) {
        this.product_name = product_name;
        this.price = price;
    }

    render() {
        return `<div class="goods-item" data-product="${this.product_name}" data-price="${this.price}">
            <h2>${this.product_name}</h2>
            <p>${this.price}</p>
            <button class="buy-btn">В корзину</button>
        </div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }

    fetchGoods() {
        return new Promise((resolve, reject) => {
            sendRequest('/catalogData.json')
                .then((result) => {
                    this.goods = JSON.parse(result);
                    resolve();
                });
        });
    }

    render() {
        let goodsLayout = '';
        this.goods.forEach(({ product_name, price }) => {
            const item = new GoodsItem(product_name, price);
            goodsLayout += item.render();
        });
        document.querySelector('.goods-list').innerHTML = goodsLayout;
    }

}
class CartItem {
    constructor(product_name, price) {
        this.product_name = product_name;
        this.price = price;
    }

}
class CartList {
    constructor() {
        this.cartGoods = [];
    }
    addItem(item) {
        sendRequest('/addToBasket.json', 'POST', { item })
            .then((res) => {
                const { result } = JSON.parse(res);
                if (result === 1) {
                    this.cartGoods.push(item);
                } else {
                    console.error('addItem Error');
                }


            });

    }
    deleteItem(id) {
        sendRequest('/deleteFromBasket.json', 'DELETE', { id })
            .then((res) => {
                const { result } = JSON.parse(res);
                if (result === 1) {
                    const itemIndex = this.cartGoods.findIndex(item => item.id_product === id);
                    if (itemIndex != -1) {
                        this.cartGoods.splice(itemIndex, 1);
                    }
                } else {
                    console.error('deleteItem Error');
                }


            });

    }
    fetchBasket() {
        return new Promise((resolve, reject) => {
            sendRequest('/getBasket.json')
                .then((result) => {
                    const { contents } = JSON.parse(result);
                    this.cartGoods = contents;
                    this.render();
                    resolve();
                });
        });

    }
    render() {

    }

}
const cart = new CartList;
const list = new GoodsList;
list.fetchGoods().then(() => list.render());