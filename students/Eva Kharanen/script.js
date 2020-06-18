const goods = [
    {title: 'Компьютер', price: 3500, img: 'img/mac.jpeg'},
    {title: 'Мышь', price: 99, img: 'img/mouse.jpeg'},
    {title: 'Клавиатура', price: 110, img: 'img/keyboard.jpeg'},
    {title: 'Монитор', price: 400, img: 'img/monitor.jpeg'},
];

const getGoodsItem = (title, price, img) => {
    return `<div class="goods-item">
                <h2 class="title">${title}</h2>
                <img class="img" src=${img} alt=${title} />
                <p class="price">${price} euro</p>
            </div>`;
};
const renderGoodsList = (list) => {
    const goodsList = list.map(listItem => getGoodsItem(listItem.title, listItem.price, listItem.img));
    document.querySelector('.goods-list').innerHTML = goodsList.join(' ');
}

renderGoodsList(goods);
