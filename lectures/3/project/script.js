const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

function sendRequest(url, callback) {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            callback(xhr.responseText);
        }
    };

    xhr.open('GET', `${API}${url}`, true);
    xhr.send();

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

    fetchGoods(callback) {
        sendRequest('/catalogData.json', (result) => {
            this.goods = JSON.parse(result);
            callback();
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

const list = new GoodsList;
list.fetchGoods();

