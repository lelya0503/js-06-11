const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

function sendRequest(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                console.log("send", xhr.responseText);
                resolve(xhr.responseText)
            }
        }
        xhr.open('GET', `${API}${url}`, true)
        xhr.send()
    })
}
class List {
    constructor() {
        this.goods = [];
    }
}
class Item {
    constructor(product_name, price) {
        this.goods = [
            this.product_name = product_name,
            this.price = price
        ];
    }
}
class GoodsList extends List {
    constructor() { super() }
    fetchGoods(goods) {
        return new Promise((resolve, reject) => {
            this.goods = goods;
            resolve()
        })

    }
    render() {
        console.log("render");
        let goodsLayout = '';
        this.goods.forEach(({ product_name, price }) => {
            const item = new GoodsItem(product_name, price);
            goodsLayout += item.render();
        });
        document.querySelector('.goods-list').innerHTML = goodsLayout;
    }
}
class BasketList extends List {
    constructor() { super() }
    render() {
        let goodsLayout = '';
        let count = 0;
        this.goods.forEach(({ product_name, price }) => {
            const item = this.goods[count];
            goodsLayout += item.render(product_name, price);
            count++;
        });
        document.querySelector(".basket-list").innerHTML = goodsLayout;
    }
    fetch(product_name, price) {
        const itemToBasket = new BasketItem(product_name, price);
        this.goods.push(itemToBasket);
        this.render();
    }
    summary() {
        let summ = 0;
        this.goods.forEach(({ product_name, price }) => {
            summ += price;
        })
        return summ;
    }
    remove(elem) {
        let toRemove = this.goods.findIndex((pos) => {
            return elem === pos.product_name
        })
        console.log(toRemove)
        this.goods.splice(toRemove, 1)
        this.render()
    }
}
class GoodsItem extends Item {
    constructor(product_name, price) {
        super(product_name, price)
    }
    render() {
        return `<div class="goods-item">
                    <h2>${this.product_name}</h2>
                    <p>${this.price}</p>
                    <button onclick=basket.fetch('${this.product_name}',${this.price})>Купить</button>
                </div>`;
    }

}

class BasketItem extends Item {
    constructor(product_name, price) {
        super(product_name, price)
    }
    render() {
        return `<div class="basket-item">
                    <h2>${this.product_name}</h2>
                    <p>${this.price}</p>
                    <button onclick=basket.remove('${this.product_name}')>Удалить</button>
                </div>`;
    }
}

const list = new GoodsList;
const basket = new BasketList;

sendRequest('/catalogData.json')
    .then((data) => {
        const listToParse = JSON.parse(data)
        console.log("promise1", listToParse);
        return list.fetchGoods(listToParse);
    })
    .then(() => {
        console.log("promise2");
        list.render()
    })