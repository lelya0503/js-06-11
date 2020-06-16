const goods = [
    { title: 'Компьютер', price: 10000 },
    { title: 'Мышь', price: 500 },
    { title: 'Клавиатура', price: 1000 },
    { title: 'Монитор', price: 7000 },
];

const getGoodsItem = (title, price) => `<div class="goods-item"><h2>${title}</h2><p>${price}</p></div>`;

const renderGoodsList = (list=goods) => {
    const goodsList = list.map(listItem => getGoodsItem(listItem.title, listItem.price));
    let newGoodsList = goodsList.join("");
    document.querySelector('.goods-list').innerHTML = newGoodsList;
}

renderGoodsList(goods);
<<<<<<< HEAD
=======

// Альтернативный вариант, еще короче
// Array.prototype.render = function(){
//     const goodsList = this.map( listItem  => `<div class="goods-item"><h2>${listItem.title}</h2><p>${listItem.price}</p></div>`);
//     const newGoodsList = goodsList.join("");
//     document.querySelector('.goods-list').innerHTML = newGoodsList;
// }

// goods.render()
>>>>>>> HW-1
