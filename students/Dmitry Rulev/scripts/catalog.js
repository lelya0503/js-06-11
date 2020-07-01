'use strict';
  class GoodsItem {
    constructor(title,price) {
      this.title=title;
      this.price=price;
    }
    render () {
      return `<div class="goods-item">
      <h3>${this.title}</h3>
      <p>${this.price}</p>
      <button class="buy-button">В корзину</button>
      </div>`;
    }
  }
 
  class GoodsList{
    constructor() {
      this.goods=[];
    }
    fetchGoods() {
      this.goods=[
        { title: 'Компьютер', price: 10000 },
        { title: 'Мышь', price: 500 },
        { title: 'Клавиатура', price: 1000 },
        { title: 'Монитор', price: 7000 },
      ];
    }
    render() {
     return this.goods.map(good=>new GoodsItem(good.title,good.price).render()).join('');
    }

   total() {
       let totalPrice=0;
      this.goods.forEach(item=>totalPrice+=item.price);
      return totalPrice;
   }
  }