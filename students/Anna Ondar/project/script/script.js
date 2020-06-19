const goods = [
	{ title: 'Компьютер', price: 10000 },
	{ title: 'Мышь', price: 500 },
	{ title: 'Клавиатура', price: 1000 },
	{ title: 'Монитор', price: 7000 },
];

const getGoodsItem = (title, price) => `<div class="goods-item"><h2>${title}</h2><p>${price}</p><button type="button" class="cart-button goods-button">Добавить в корзину</button></div>`;

const renderGoodsList = (list) => {
	const goodsList = list.map(listItem => getGoodsItem(listItem.title, listItem.price)).join("");
	document.querySelector('.goods-list').innerHTML = goodsList;
};

renderGoodsList(goods);
