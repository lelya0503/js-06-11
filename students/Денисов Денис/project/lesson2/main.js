class GoodsItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    render() {
        return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p><button type="button" class="goods__button">Добавить в корзину</button></div>`;
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
        return this.goods
    }
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
    priceSum() {
        let sum = 0;
        this.goods.forEach(good => {
            sum += good.price
        })
        return sum
    }
}
const list = new GoodsList();
list.fetchGoods();
list.render();
list.priceSum();

class BasketItem extends GoodsItem {
    constructor(title, price) {
        super(title, price)
        this.btns = '<button type="button" class="basket__button">Удалить из корзины</button>'
    }
    render() {
        return `<div class="basket-item"><h3>${this.title}</h3><p>${this.price}</p>${this.btns}</div>`;
    }
}

class Basket {
    constructor() {
        this._product = []
    }
    get item() {
        return this._product
    }
    addItem(item) {
        let arr = list.fetchGoods()
        let brr = arr.filter(x => {
            if (x.title == item) {
                return this._product.push(x)
            }
        })
    }
    removeItem(elem) {
        let arr = Array.from(document.querySelector('.basket-list').children);
        let idx = arr.indexOf(elem);
        this.item.splice(idx, 1);
        document.querySelector('.basket-list').removeChild(elem);
        console.log(this._product)
        return this._product

    }
    render() {
        let listHtml = '';
        this._product.forEach(item => {
            const basketItem = new BasketItem(item.title, item.price);
            listHtml += basketItem.render();
        });
        document.querySelector('.basket-list').innerHTML = listHtml;
        let basketItem = document.querySelectorAll('.basket-item');
        let basketBtns = document.querySelectorAll('.basket__button');
        basketBtns.forEach((btn, index) => {
            btn.addEventListener('click', function(e) {
                basket.removeItem(basketItem[index])
            })
        })
    }
}

let basket = new Basket()

let goodBtns = document.querySelectorAll('.goods__button');
let goodItem = document.querySelectorAll('.goods-item');

goodBtns.forEach((btn, index) => {
    btn.addEventListener('click', function(e) {
        basket.addItem(goodItem[index].firstChild.textContent)
        basket.item
    })
})

let cartBtn = document.querySelector('.cart-button')
cartBtn.addEventListener('click', (e) => {
    basket.render()
})

let basketBtns = document.querySelectorAll('.basket__button');
let basketItem = document.querySelectorAll('.basket-item');

basketBtns.forEach((btn, index) => {
    console.log(btn)

    btn.addEventListener('click', function(e) {})
})