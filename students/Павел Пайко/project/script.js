const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

function sendRequest(url, callback) {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            callback(xhr.responseText);
        }
    }
    xhr.open('GET', `${API}${url}`, true)
    xhr.send()
}
class List {
    constructor() {
        this.goods = [];
    }
}
class Item {
    constructor(title, price) {
        this.goods = [
            this.title = title,
            this.price = price
        ];
    }
}
class GoodsList extends List {
    constructor() {
        super()
    }
    fetchGoods(callback) {
        sendRequest('/catalogData.json', (result) => {
            this.goods = JSON.parse(result);
            callback();
        });
    }
    render() {
        console.log("render");
        let goodsLayout = '';
        this.goods.forEach(({ title, price }) => {
            const item = new GoodsItem(title, price);
            goodsLayout += item.render();
        });
        document.querySelector('.goods-list').innerHTML = goodsLayout;

    }
}
class BasketList extends List {
    constructor() {
        super();
    }
    render() {
        let goodsLayout = '';
        let count = 0;
        this.goods.forEach(({ title, price }) => {
            const item = this.goods[count];
            goodsLayout += item.render(title, price);
            count++;
        });
        document.querySelector(".basket-list").innerHTML = goodsLayout;
    }
    fetch(title, price) {
        const itemToBasket = new BasketItem(title, price);
        this.goods.push(itemToBasket);
        this.render();
    }
    summary() {
        let summ = 0;
        this.goods.forEach(({ title, price }) => {
            summ += price;
        })
        return summ;
    }
}
class GoodsItem extends Item {
    constructor(title, price) {
        super(title, price)
    }
    render() {
        return `<div class="goods-item">
                    <h2>${this.title}</h2>
                    <p>${this.price}</p>
                    <button onclick=basket.fetch('${this.title}',${this.price})>Купить</button>
                </div>`;
    }

}

class BasketItem extends Item {
    constructor(title, price) {
        super(title, price)
    }
    render() {
        return `<div class="basket-item">
                    <h2>${this.title}</h2>
                    <p>${this.price}</p>
                </div>`;
    }
}

const list = new GoodsList;
const basket = new BasketList;

list.fetchGoods(() => list.render());