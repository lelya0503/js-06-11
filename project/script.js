const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

function sendRequest(url, method = 'GET', payload = {}) {

    return new Promise((resolve, reject) => {
        
        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(xhr.responseText);
                } else {
                    reject(xhr.responseText);
                }
            }
        };

        xhr.open('GET', `${API}${url}`, true);
        xhr.send(JSON.stringify(payload));
    });
}


class GoodsItem {
    constructor({ id_product, product_name, price }) {
        this.id_product = id_product;
        this.product_name = product_name;
        this.price = price;
    }
    
    render() {
        return `<div class="goods-item" data-id="${this.id_product}" data-title="${this.product_name}" data-price="${this.price}">
            <h2>${this.product_name}</h2>
            <p>${this.price}</p>
            <button name="add-to-cart">Добавить в корзину</button>
        </div>`;
    }
}

class GoodsList {
    constructor(cart) {
        this.goods = [];
        this.filteredGoods = [];
        this.cart = cart;
        this.init();
    }

    init() {
        document.querySelector('.goods-list').addEventListener('click', (event) => {
            if (event.target.name === 'add-to-cart') {
                const item = {
                    id_product: event.target.parentElement.dataset.id,
                    product_name: event.target.parentElement.dataset.title,
                    price: event.target.parentElement.dataset.price,
                };
                this.cart.addItem(item);
            }
        });

        document.querySelector('.search-button').addEventListener('click', (event) => {
            const value = document.querySelector('.goods-search').value;
            this.filterGoods(value);
        });
    }

    fetchGoods() {
        return new Promise((resolve, rejects) => {
            sendRequest('/catalogData.json')
                .then((result) => {
                    this.goods = JSON.parse(result);
                    this.filteredGoods = this.goods;
                    resolve();
                });
        });
    }

    filterGoods(value) {
        const regexp = new RegExp(value, 'i');
        this.filteredGoods = this.goods.filter(({ product_name }) => regexp.test(product_name));
        this.render();
    }

    render() {
        let goodsLayout = '';
        this.filteredGoods.forEach((item) => {
            const goodsItem = new GoodsItem(item);
            goodsLayout += goodsItem.render();
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
        this.fetchBasket();
    }

    addItem(item) {
        sendRequest('/addToBasket.json', 'POST', { item })
            .then((res) => {
                const { result } = JSON.parse(res);
                if (result === 1) {
                    this.cartGoods.push(item);
                    console.log(this.cartGoods);
                } else {
                    console.error('addItem Error');
                }
            });
    }

    removeItem(id) {
        sendRequest('/deleteFromBasket.json', 'DELETE', { id })
            .then((res) => {
                const { result } = JSON.parse(res);
                if (result === 1) {
                    const itemIndex = this.cartGoods.findIndex(item => item.id_product === id);
                    if (itemIndex !== -1) {
                        this.cartGoods.splice(itemIndex, 1);
                    }
                } else {
                    console.error('removeItem Error');
                }
            });
    }

    fetchBasket() {
        return new Promise((resolve, rejects) => {
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
const list = new GoodsList(cart);
list.fetchGoods().then(() => list.render());

