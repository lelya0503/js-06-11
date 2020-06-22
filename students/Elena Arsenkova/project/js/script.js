/* функции генераторы

const menuItem = {
    color: 'blue',
    name: 'Catalog',
    makeRed: function () {
        this.color = 'red';
    }
};

function MenuItem (color = 'blue', name = 'Home') {
    this.color = color;
    this.name = name;
}

MenuItem.prototype.makeRed = function () {
    this.color = 'red';
}

function CatalogMenuItem (color, name) {
    MenuItem.call(this, color, name);
}

CatalogMenuItem.prototype = Object.create(MenuItem.prototype);

CatalogMenuItem.prototype.constructor = CatalogMenuItem;

*/

//  ES2015 Классы

const goods = [
    { title: 'Компьютер', price: 10000 },
    { title: 'Мышь', price: 500 },
    { title: 'Клавиатура', price: 1000 },
    { title: 'Монитор', price: 7000 },
];

class CatalogItem {
    constructor(title, price) {
       this.title = title;
       this.price = price;
        
    }

    render() {
        let htmlStr = '';
        goods.forEach (item => {
            htmlStr += `<div class="item-box">
                        <img src="${item.img}" alt="">
                        <div class="desc">
                            <h3>${item.title}</h3>
                            <p>${item.price} $</p>
                            <button class="buy-btn">Buy</button>
                        </div>
                    </div>`
        })
        document.querySelector('.main').innerHTML = htmlStr;      
    }

    goodsPriceSummery(price){
        let priceList = price.map(priceItem => getGoodsItem(listItem.price));
        console.log(Object.values(priceList).reduce((a, b) => a + b, 0)); 
    }

}

let catalog = new CatalogItem();
catalog.render();
catalog.goodsPriceSummery(goods);

class BasketItem {
    constructor(title, price) {
       this.title = title;
       this.price = price;
        
    }

    render() {  
    }

    amountItems() {  
    }

}

let basket = new BasketItem('ass', 100);
basket.render();
