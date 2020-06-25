
const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

/*function sendRequest(url, callback) {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            callback(xhr.responseText);
        }
    };

    xhr.open('GET', `${API}${url}`, true);
    xhr.send();

}*/

class GoodsItem {
    constructor(product_name, price) {
        this.product_name = product_name;
        this.price = price;
    }
    
    render() {
        return `<div class="item-box" data-title="${this.product_name}" data-price="${this.price}">
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

    /*fetchGoods(callback) {
        sendRequest('/catalogData.json', (result) => {
            this.goods = JSON.parse(result);
            callback();
        });
    }*/

    fetchGoods(url) {
       return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();

        xhr.open('GET', `${API}${url}`, true);
        xhr.onreadystatechange = () => {
                const result = xhr.responseText;      
                resolve(result);  
                reject(console.log('error'));    
            }
        xhr.send();
        });
   } 


    render() {
        let goodsLayout = '';
        this.goods.forEach(({ product_name, price }) => {
            const item = new GoodsItem(product_name, price);
            goodsLayout += item.render();
        });
        document.querySelector('.main').innerHTML = goodsLayout;
    }
}

const list = new GoodsList;
list.fetchGoods();


class CartItem {
    constructor(product_name, price) {
        this.product_name = product_name;
        this.price = price;
        this.amount = 1;
    }
    
    render() {
        return `<div class="basket-item" data-title="${this.product_name}" data-price="${this.price}">
            <h2>${this.product_name}</h2>
            <p>${this.price}</p>
            <button name="delete-from-cart" onclick="deleteCartItem()>X</button>
        </div>`;
        }

    addMore() {
        this.amount++;
    }

}


class CartList {
    constructor() {
        this.cartGoods = [];
        /* document.querySelector('.main').addEventListener('click', (event) =>{
          if (event.target.name === 'add-to-cart') {
             
           } 
        });*/
    }

    render() {
        let cartLayout = '';
        this.goods.forEach(({ product_name, price }) => {
            const item = new CartItem(product_name, price);
            goodsLayout += item.render();
        });
        document.querySelector('.basket-item').innerHTML = cartLayout;
    }


    addItemToCart(product) {
        let cartItem = this.goods.filter(element => element.title == product.title)[0]

            if (cartItem != undefined) {
            cartItem.addMore();
             } 
            else { 
            let item = new CartItem(product);
            this.goods.push(item);
             }
        }

    deleteCartItem(index) {
        this.goods.splice(index, 1);
        this.render();
    }
}


