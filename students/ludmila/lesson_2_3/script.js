
class GoodsItem {
  constructor(title, price, list, count, countforpay) {
    this.title = title;
    this.price = price;
    this.list = list;//добавляем свойство, false - товар в корзину не выбран, true- товар в корзине.
    this.count = count;//добавляем свойство, количество на складе;
    this.countforpay = countforpay;//добавляем свойство, количество в корзине, по умолчанию 0;
  }
  render() {
    return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
  }

addspicok(countforpay){ // метод - добавить в корзину
this.list = true; 	
this.countforpay = countforpay;	
}


}

class GoodsList { // список товаров для каталога
  constructor() {
    this.goods = [];
  }
  fetchGoods() {  
    this.goods = [
      { title: 'Shirt', price: 150, count: 50 },
      { title: 'Socks', price: 50, count: 25 },
      { title: 'Jacket', price: 350, count: 10 },
      { title: 'Shoes', price: 250, count: 35 },
    ];
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
class GoodsListforpay { // список товаров для корзины
  constructor() {
    this.goods_list = [];
  }
fetchGoodsList() { 
 const spisok = new GoodsList;
  let goods_spisok= spisok.fetchGoods();

goods_spisok.forEach =(good => {
      const goodItem = new GoodsItem(good.title, good.price, good.list, good.count, good.countforpay);
      if ((good.list===true) && (good.count>good.countforpay)) {
	  this.goods_list[title, price, list, count, countforpay] = goodItem ;
	  }
})

document.querySelector('.goods-list').innerHTML = this.goods_list.join(",");
}
GoodsListforpaysumma() {
let summa=0;
this.goods_list.forEach = (good => {	
summa = summa + good.countforpay*good.price;	
})	
}

class Hamburger {
  constructor(size, stuffing) { 
  this.size[name,price, cal] = size;
  this.stuffing[name,price, cal] = stuffing;
  this.toppings[name, price, cal] = [];
  }
  addTopping(topping) {  
  // Добавить добавку
  this toppings [name, cal] = topping;

  }
  removeTopping(topping) { // Убрать добавку
let value [name, cal] = topping;
  this toppings.filter(function(item) { 
     item !== value;
})
  }
  getToppings(topping) {   // Получить список добавок
this toppings.forEach(good => {
  
      const goodtop[name, price, cal] = [good.name,good.price, good.cal];
      
	  })
  //document.querySelector('.goods-list').innerHTML = this.toppings.join(",");

  }
  getSize() {              // Узнать размер гамбургера 
  let size = this.size[name];
  return size;
  }
  getStuffing() {          // Узнать начинку гамбургера 
  let stuffing = this.stuffing[name];
  return  stuffing;
 }
  calculatePrice() {       // Узнать цену
  const size = getSize();
  const stuffing = getStuffing();
  const topp = getToppings();
  let summa = this.size[price]+this.stuffing[price]+this.topp[price];
  return summa;
  }
  calculateCalories() {    // Узнать калорийность 
  const size = getSize();
  const stuffing = getStuffing();
  const topp = getToppings(topping);
  let cal = this.size[cal]+this.stuffing[cal]+this.topp[cal];
  return cal;
  }
  }
