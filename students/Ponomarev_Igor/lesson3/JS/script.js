const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

function sendRequest(url, method = 'GET', payload = {}) {
    return new Promise((resolcve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolcve(xhr.responseText);
                } else {
                    reject(xhr.responseText);
                }
            }
        };

        xhr.open('GET', `${API}${url}`, true);
        xhr.send(payload);
    });


}

class GoodsItem {
    constructor(product_name, price) {
        this.product_name = product_name;
        this.price = price;
    }

    render() {
        return `<div class="goods-item" data-title="${this.product_name}" data-price="${this.price}">
            <h2>${this.product_name}</h2>
            <p>${this.price}</p>
            <button name="add-to-cart">Добавить в корзину</button>
        </div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }

    fetchGoods() {
        return new Promise((resolcve, reject) => {
            sendRequest('/catalogData.json')
                .then((result) => {
                    this.goods = JSON.parse(result);
                    resolcve();
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


class CarItem {
    constructor(product_name, price) {
        this.product_name = product_name;
        this.price = price;
    }
}

class CarList {
    constructor() {
        this.cartGoods = [];
        this.fetchBasket();
    }
    addItem(item) {
        sendRequest('/addToBasket.json', `POST`, { item })
            .then((res) => {
                const { result } = JSON.parse(res);
                if (result === 1) {
                    this.cartGoods.push(itim);
                } else {
                    console.error(`Некая ошибка`);
                }
            });
    }
    removeItem(id) {
        sendRequest('/deleteFromBasket.json', `DELETE`, { id })
            .then((result) => {
                const { res } = JSON.parse(res);
                if (result === 1) {
                    const itemIndex = this.cartGoods.findIndex(item => item.id_product === id)
                    if (itemIndex !== -1) {
                        this.cartGoods.splice(itemIndex, 1);
                    }
                    this.cartGoods.push(itim);
                } else {
                    console.error(`Некая ошибка`);
                }
            });
    }
    fetchBasket() {
        return new Promise((resolcve, reject) => {
            sendRequest('/getBasket.json')
                .then((result) => {
                    const { contents } = JSON.parse(result);
                    this.goods = contents;
                    this.render();
                    resolcve();
                });
        });
    }
    resolcve() {

    };
}
const cart = CarList;
const list = new GoodsList;
list.fetchGoods().then(() => list.render());

