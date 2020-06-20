const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

function sendRequest(url) {

    return new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                resolve(xhr.responseText);
            }
        };

        xhr.open('GET', `${API}${url}`, true);
        xhr.send();
    })

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
        this.basketGoods = [];


        document.querySelector(".goods-list").addEventListener("click", (event) => {

            if (event.target.name === "add-to-cart") {
                console.log(event.target.parentElement.dataset.title);
                console.log(event.target.parentElement.dataset.price);
                this.addToBasket(event.target.parentElement.dataset.title, event.target.parentElement.dataset.price);

            }
        });

    }

    // Метод добавления товаров в корзину
    addToBasket(a, b) {

        const basketObj = new GoodsItem(a, b);


        this.basketGoods.push(basketObj);

        console.log(this.basketGoods);

    }


    fetchGoods() {
        
        return new Promise((resolve, reject) => {
        
        sendRequest('/catalogData.json').then((result) => {
            this.goods = JSON.parse(result);
            resolve();
         
            
        });
        
        });
    }

    render() {
        let goodsLayout = '';
        this.goods.forEach(({
            product_name,
            price
        }) => {
            const item = new GoodsItem(product_name, price);
            goodsLayout += item.render();
        });
        document.querySelector('.goods-list').innerHTML = goodsLayout;
    }
}



class backetItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
        this.quantity = 1;
    }

}

class basket {
    constructor() {

        this.elInBacket = [];

    }

    fetchGoodsInBasket(callback) {
        sendRequest('/getBasket.json').then((result) => {
            this.elInBacket = JSON.parse(result);

            callback();

        });
    }


    renderBacket() {

    }


    delFromBacket() {

        document.querySelector(".del-list").addEventListener("click", (event) => {

            if (event.target.name === "del-from-cart") {
                console.log(event.target.parentElement.dataset.title);
                 
                const titleEl = event.target.parentElement.dataset.title;

                // Не уверен, что сработает сравнение titleEl, если не так посоветуйте, пожалуйста
                
                const index = this.elInBacket.findIndex((element) => {
                    return element.title === titleEl;
                });
                if (index !== -1) {
                    this.elInBacket.splice(index, 1);
                    console.log(this.elInBacket);
                }


            }
        });


    }
}



const list = new GoodsList;
list.fetchGoods().then(() => list.render());



const elBacket = new basket;
elBacket.fetchGoodsInBasket(() => elBacket.renderBacket());
console.log(elBacket);
