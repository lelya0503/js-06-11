'use strict';
function sendRequest(url) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status !== 200) {
            reject();
          }
          const bag = JSON.parse(xhr.responseText);
          resolve(bag);
        }
      }
      xhr.send();
    });
  }
  
  class GoodsItem {
    constructor(title,price) {
      this.title=title;
      this.price=price;
    }
    render () {
      return `<div class="bag-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
    }
  }
 
  class GoodsList{
    constructor() {
      this.goods=[];
    }
    fetchGoods() {
      sendRequest ('http://localhost:3000/bag')
      .then((goods) =>{
        this.goods=goods;
      });
    }
    render() {
     return this.goods.map(good=>new GoodsItem(good.title,good.price).render()).join('');
    }

   total() {
       let totalPrice=0;
      this.goods.forEach(item=>totalPrice+=item.price);
      return totalPrice;
   }
  
   /* // метод для очистки корзины
    clearAll() {

    }
    //метод подсчета суммы купленных товаров
    total(){

    }
    //метод оплаты товаров
    pay(){

    }
}

class BagItem {
    constructor() {

    }
    //удаляет один элемент из корзины
    deleteItem(){

    }*/
}
const list= new GoodsList();
  list.fetchGoods().then(()=>{
    document.querySelector('.bag-list').innerHTML=list.render();
  });