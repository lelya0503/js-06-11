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
