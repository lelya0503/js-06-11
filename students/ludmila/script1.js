function makeGETRequest(url, callback) {
  var xhr;

  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else if (window.ActiveXObject) { 
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      callback(xhr.responseText);
    }
  }

  xhr.open('GET', url, true);
  xhr.send();
}
const promise = new Promise((resolve, reject) => {

.then((callback) => {
         console.log('processResult promise resolve', callback);
     })
     .catch((error) => {
         console.log('Promise rejected', error);
     });



});


class GoodsList { // список товаров для каталога
  constructor() {
    this.goods = [];
  }
  render() {
    let listHtml = '';
    this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.title, good.price, good.list, count, 0);
      listHtml += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = listHtml;
  }
  fetchGoods() {  
    this.goods = [
      { title: 'Shirt', price: 150, count: 50 },
      { title: 'Socks', price: 50, count: 25 },
      { title: 'Jacket', price: 350, count: 10 },
      { title: 'Shoes', price: 250, count: 35 },
    ];
  
  const promise = new Promise((resolve, reject) => {

.then(() => {
	
	this.render();
         console.log('processResult promise resolve'));
     })
     .catch((error) => {
         console.log('Promise rejected', error);
     });



});
  
  }
  render() {
    let listHtml = '';
    this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.title, good.price, good.list, count, 0);
      listHtml += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = listHtml;
  }



}
