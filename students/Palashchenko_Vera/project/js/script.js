class GoodsItem {
  constructor(title, price, img) {
    this.title = title;
    this.price = price;
    this.img = img;
  }
  render() {
    return `<div class="goods-item">
            <h2>${this.title}</h2>
            <img src=${this.img} alt=${this.title} />
            <div class="goods-item__price">
              <p>${this.price} р.</p>
              <button >Купить</button>
            </div>
          </div>`;
  }
}

class GoodsList {
  constructor() {
    this.goods = [];
  }
  fetchGoods() {
    this.goods = [
      { title: 'Компьютер', price: 10000, img: 'img/comp.jpg' },
      { title: 'Мышь', price: 500, img: 'img/mouse.jpg' },
      { title: 'Клавиатура', price: 1000, img: 'img/2.jpg' },
      { title: 'Монитор', price: 7000, img: 'img/monitor.jpg' },
    ];
  }
  getTotalPrice() {
    let goodsTotalPrice = 0;
    if (this.goods.length !== 0) {
      this.goods.map(({ price }) => {
        goodsTotalPrice += Number(price);
      });
      document
        .querySelector('.total-price')
        .append(`Сумма всех наших товаров = ${goodsTotalPrice} р`);
    }
  }
  render() {
    let goodsLayout = '';

    this.goods.forEach(({ title, price, img }) => {
      const item = new GoodsItem(title, price, img);
      goodsLayout += item.render();
    });

    document.querySelector('.goods-list').innerHTML = goodsLayout;
  }
}

const list = new GoodsList();
list.fetchGoods();
list.getTotalPrice();
list.render();

class CartItem {
  constructor(/*~ цена,название,количество,id */) {}
  showProduct() {
    /* Просмотр продукта - 
    скорее всего переход на страницу по id продукта */
  }
  removeProduct() {
    /* удаление продукта*/
  }
  countProduct() {
    /* изменение количества продукта */
  }
  render() {
    /*вывод информации о товаре */
  }
}

class CartList {
  constructor() {
    this.items = [];
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
  render() {
    /*вывод товаров */
  }
}

// Начала делать класс для гамбургеров.
// Столкнулась с проблемой вызова методов в самом классе.
// Если я создаю экземпляр класса и оттуда вызываю метод, то он вызовется сразу,
// а нужно при клике на тот же чекбокс(или другой тег). Искала информацию в инетренете,
// но то, что находила - это вызов уже за пределом класса.
// Не смогла понять как обойти этот момент.
// Внизу моя попытка написать класс до тех пор, пока не споткнулась о вызов метода
// Если есть возможность, расскажите о таком моменте, как обращаться к методам в самом класса

class Hamburger {
  constructor() {
    this.burger = [];
  }

  fetchBurger() {
    this.burger = [
      { title: 'Большой', price: 100, calories: 40, category: 'size' },
      { title: 'Маленький', price: 50, calories: 20, category: 'size' },
      { title: 'С сыром', price: 10, calories: 20, category: 'composition' },
      {
        title: 'С салатом',
        price: 20,
        calories: 5,
        category: 'composition',
      },
      {
        title: 'С С картофелем',
        price: 15,
        calories: 10,
        category: 'composition',
      },
      {
        title: 'Приправа',
        price: 15,
        calories: 0,
        category: 'condiment',
      },
      {
        title: 'Майонез',
        price: 20,
        calories: 5,
        category: 'condiment',
      },
    ];
  }

  changeSize(value) {
    console.log(value);
  }
  chooseComposition() {}
  chooseСondiment() {}
  render() {
    return `<div>
        Ваш заказ:
            <div>
              <div>Выберите размер бургера:
              ${this.burger
                .filter(({ category }) => category === 'size')
                .map((item) => {
                  return `<div>
                  <label>${item.title}</label>
                  <input 
                    type='checkbox' 
                    onchange=${this.changeSize.bind(item)}/>
                  </div>`;
                })}
              
             </div>
              <div>Выберите состав:
              ${this.burger
                .filter(({ category }) => category === 'composition')
                .map(({ title }) => {
                  return `<div>
                  <label>${title}</label>
                  <input type='checkbox' ></div>`;
                })}</div>
              <div>Выберите приправу по желанию:
              ${this.burger
                .filter(({ category }) => category === 'condiment')
                .map(({ title }) => {
                  return `<div>
                  <label>${title}</label>
                  <input type='checkbox' ></div>`;
                })}</div>
            </div>
      </div>`;
  }
}
const hamburger = new Hamburger();
hamburger.changeSize;
hamburger.fetchBurger();
document.querySelector('.burger-menu__content').innerHTML = hamburger.render();
