class List {
    constructor() {
        this.goods = [];
        this.cssClass = '';
    }
    render() {
        let goodsLayout = '';
        this.goods.forEach(({ title, price }) => {
            const item = new GoodsItem(title, price);
            goodsLayout += item.render();
        });
        document.querySelector(this.cssClass).innerHTML = goodsLayout;
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
        this.cssClass = '.goods-list';
    }
    fetchGoods() {
        this.goods = [
            { title: 'Компьютер', price: 10000 },
            { title: 'Мышь', price: 500 },
            { title: 'Клавиатура', price: 1000 },
            { title: 'Монитор', price: 7000 }
        ];
    }

}
class BasketList extends List {
    constructor() {
        super();
        this.cssClass = '.basket-list';
    }
    render() {
        let goodsLayout = '';
        let count = 0;
        this.goods.forEach(({ title, price }) => {
            const item = this.goods[count];
            goodsLayout += item.render(title, price);
            count++;
        });
        document.querySelector(this.cssClass).innerHTML = goodsLayout;
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

list.fetchGoods();
list.render();

const basket = new BasketList;
