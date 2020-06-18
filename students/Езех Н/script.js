'use strict';
const goods = [
    { title: 'Компьютер', price: 10000 },
    { title: 'Мышь', price: 500 },
    { title: 'Клавиатура', price: 1000 },
    { title: 'Монитор', price: 7000 },
    {}
];

const getGoodsItem = (title = 'Монитор', price = '7000') => {
    return `<div class = "goods-item"> <h2 id = "txt-heading"> ${title} </h2> <p>${price}</p> <input type = "button" value = "В корзину" class = "btnAddAction"/></div>`;
}

const renderGoodsList = (list) => {
    const goodsList = list.map(listItem => getGoodsItem(listItem.title, listItem.price));
   
    document.querySelector('.goods-list').innerHTML = goodsList.join('');

 }

 renderGoodsList(goods);


    
   
   