"use strict";

class GoodsItem {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }

  render() {
    return `<div class="goods-item">
          <h2>${this.title}</h2>
          <p>${this.price}</p>
      </div>`;
  }
}

class GoodsList {
  constructor() {
    this.goods = [];
  }

  fetchGoods() {
    this.goods = [
      { title: "Компьютер", price: 10000 },
      { title: "Мышь", price: 500 },
      { title: "Клавиатура", price: 1000 },
      { title: "Монитор", price: 7000 },
      { title: "Колонки", price: 600 },
    ];
  }

  render() {
    let goodsLayout = "";
    this.goods.forEach(({ title, price }) => {
      const item = new GoodsItem(title, price);
      goodsLayout += item.render();
    });
    document.querySelector(".goods-list").innerHTML = goodsLayout;
  }

  // Метод считающим сумму товаров

  getSumm() {
    let summ = 0;
    for (let i = 0; i <= this.goods.length; i++) {
      summ += this.goods[i].price; // метод считающий сумму
      return summ;
    }
  }
}

const list = new GoodsList();
list.fetchGoods();
list.render();

// Класс для корзины товаров, с методами добавляющим в корзину, удаляющим из нее, подсчитывающим сумму товара и отрисовыванием товаров в корзине
class Basket {
  constructor() {
    this.basketGoods = [];
  }

  addGood() {
    this.basketGoods.push(); // метод добавления в корзину товара
  }

  deleteGood() {
    this.basketGoods.splice(); // метод удаляющий товар из корзины
  }

  getSumm() {
    let summ = 0;
    for (let i = 1; i <= this.basketGoods.length; i++) {
      summ += this.basketGoods[i]; // метод считающий сумму товара в корзине
    }
  }

  renderBasket() {
    return `<div class="Basket-item">
          <h2>${this.title}</h2>
          <p>${this.price}</p>
      </div>`; // метод отрисовывающий товары в корзине
  }
}


renderGoodsList(goods);
