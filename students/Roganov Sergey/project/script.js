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

class Hamburger {
  constructor(size, stuffing) {
    if (size === "small" || size === "big") {
      this.size = size;
    }
    if (stuffing === "chees" || stuffing === "salat" || stuffing === "potato") {
      this.stuffing = stuffing;
    }
  }
  addTopping(topping) {
    if (topping === "mayo" || topping === "spice") {
      this.topping = topping;
    }
    // Добавить добавку
  }
  removeTopping(topping) {
    if (this.topping === "mayo" && topping === "mayo") {
      delete this.topping;
    }

    if (this.topping === "spice" && topping === "spice") {
      delete this.topping;
    }
    // Убрать добавку
  }
  getToppings() {
    console.log(this.topping);
    // Получить список добавок
  }
  getSize() {
    console.log(this.size);
    // Узнать размер гамбургера
  }
  getStuffing() {
    console.log(this.stuffing);
    // Узнать начинку гамбургера
  }
  calculatePrice() {
    let calculPrice = 0;
    let priceHam = 0;
    let priceStuff = 0;
    let priceToppings = 0;
    if (this.size === "small") {
      priceHam = 50;
    }
    if (this.size === "big") {
      priceHam = 100;
    }
    if (this.stuffing === "chees") {
      priceStuff = 10;
    }
    if (this.stuffing === "salat") {
      priceStuff = 20;
    }
    if (this.stuffing === "potato") {
      priceStuff = 15;
    }
    if (this.topping === "spice") {
      priceToppings = 15;
    }
    if (this.topping === "mayo") {
      priceToppings = 20;
    }
    calculPrice = priceHam + priceStuff + priceToppings;
    console.log(calculPrice);
    // Узнать цену
  }
  calculateCalories() {
    let calculCcal = 0;
    let ccalHam = 0;
    let ccalStuff = 0;
    let ccalToppings = 0;
    if (this.size === "small") {
      ccalHam = 20;
    }
    if (this.size === "big") {
      ccalHam = 40;
    }
    if (this.stuffing === "chees") {
      ccalStuff = 20;
    }
    if (this.stuffing === "salat") {
      ccalStuff = 5;
    }
    if (this.stuffing === "potato") {
      ccalStuff = 10;
    }
    if (this.topping === "spice") {
      ccalToppings = 0;
    }
    if (this.topping === "mayo") {
      ccalToppings = 5;
    }
    calculCcal = ccalHam + ccalStuff + ccalToppings;
    console.log(calculCcal);

    // Узнать калорийность
  }
}

const ham1 = new Hamburger("big", "potato");
console.log(ham1);
