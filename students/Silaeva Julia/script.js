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
	  constructor(title, price) {
		  this.title = title;
		  this.price = price;
	  }
  
	  render() {
		  return `<div class="goods-item"><h2>${this.title}</h2><p>${this.price}</p><button type="button" class="cart-button goods-button">В корзину</button></div>`;
	  }
  }

class GoodsList {
	constructor() {
		this.goods = [];
	}

	fetchGoods() {
		this.goods = [
			{ title: 'Компьютер', price: 10000 },
			{ title: 'Мышь', price: 500 },
			{ title: 'Клавиатура', price: 1000 },
			{ title: 'Монитор', price: 7000 },
		];
	}

	render() {
		let goodsLayout = '';
		this.goods.forEach(({ title, price }) => {
			const item = new GoodsItem(title, price);
			goodsLayout += item.render();
		});
		document.querySelector('.goods-list').innerHTML = goodsLayout;
	}

	summary() {
		let summ = 0;
		this.goods.forEach(({ title, price }) => {
			summ += price;
		})
		return summ;
	}
}

class Basket {
	constructor() {
		this.selectedGoods = [] //выбрать
	}

	addToBasket //добавить 

	deleteFromBasket //удалить 

	order //заказать

}

const list = new GoodsList;
list.fetchGoods();
list.render();

