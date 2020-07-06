const API =
  'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

function sendRequest(url) {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', `${API}${url}`, true);

    xhr.onload = function () {
      if (this.status === 200) {
        resolve(JSON.parse(this.response));
      } else {
        const error = new Error(this.statusText);
        error.code = this.status;
        reject(error);
      }
    };

    xhr.onerror = function () {
      reject(new Error('Network Error'));
    };

    xhr.send();
  });
}

class GoodsItem {
  constructor(product_name, price, id_product) {
    this.product_name = product_name;
    this.price = price;
    this.id = id_product;
  }
  render() {
    return `<div class="goods-item" data-title="${this.product_name}" 
              data-price="${this.price}" data-id="${this.id}">
            <h2>${this.product_name}</h2>
            <div class="goods-item__price">
              <p>${this.price} р.</p>
              <button name='add-to-cart'>Купить</button>
            </div>
          </div>`;
  }
}

const cart = [];

class GoodsList {
  constructor() {
    this.goods = [];
    this.goodsItem = {};
  }
  fetchGoods(render) {
    sendRequest('/catalogData.json')
      .then((response) => {
        this.goods = response;
        render();
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
      });
  }
  getTotalPrice() {
    let goodsTotalPrice = 0;
    if (this.goods.length !== 0) {
      goodsTotalPrice = this.goods.reduce((prevValue, value) => {
        return prevValue + value.price;
      }, 0);
      document
        .querySelector('.total-price')
        .append(`Сумма всех наших товаров = ${goodsTotalPrice} р`);
    }
  }

  addToCart() {
    document.querySelector('.goods-list').addEventListener('click', (event) => {
      const parent = event.target.parentElement.parentElement;
      const product = {};
      if (event.target.name === 'add-to-cart') {
        product.id = parent.dataset.id;
        product.name = parent.dataset.title;
        product.price = parent.dataset.price;
      }
      if (Object.entries(product).length !== 0) cart.push(product);
    });
  }

  render() {
    let goodsLayout = '';
    this.goods.forEach(({ product_name, price, id_product }) => {
      const item = new GoodsItem(product_name, price, id_product);
      goodsLayout += item.render();
    });

    document.querySelector('.goods-list').innerHTML = goodsLayout;
  }
}

const list = new GoodsList();
list.fetchGoods(() => list.render());
list.addToCart();

class CartItem {
  constructor(name, price, id) {
    this.name = name;
    this.price = price;
    this.id = id;
  }

  showProduct() {
    /* Просмотр продукта - 
    скорее всего переход на страницу по id продукта */
  }
  removeProduct() {
    document.querySelector('.cart').addEventListener('click', (event) => {
      const removeTag = event.target.parentElement;
      const removeId = event.target.parentElement.dataset.id;

      const index = cart.findIndex((item) => item.id === removeId);
      if (index !== -1) {
        cart.splice(index, 1);
        removeTag.remove();
      }
    });
  }

  countProduct() {
    /* изменение количества продукта */
  }
  render() {
    return `<div class="cart-item" data-title="${this.name}" data-price="${this.price}"
            data-id="${this.id}" >
            <p >${this.name}</p>
            <span>${this.price} р</span>
            <button class="remove-from-cart">Удалить</button>
        </div>`;
  }
}

const cartItem = new CartItem();
cartItem.removeProduct();

class CartList {
  constructor() {
    this.items = [];
  }
  getProducts() {
    document.querySelector('header').addEventListener('click', () => {
      let cartList = [];

      if (cart.length !== 0) {
        cart.forEach(({ name, price, id }) => {
          const item = new CartItem(name, price, id);
          cartList += item.render();
        });
      }
      document.querySelector('.cart').innerHTML = cartList;
    });
  }
  getCartTotalPrice() {
    /*вывод общей стоимости, хотя ее можно записать при выводе товаров, 
    не создавая специального метода */
  }
  clearCart() {
    /*очистка корзины */
  }
  checkout() {
    /*оформление заказа */
  }
  render() {}
}

const cartList = new CartList();
cartList.getProducts();
