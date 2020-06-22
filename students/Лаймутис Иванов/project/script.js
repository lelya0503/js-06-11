
// ? лучше использовать определение переменной let, так как значения массива goods могут менятся, подтягиваясь из БД ?

let goods = [
    { title: 'Компьютер', price: 10000 },
    { title: 'Мышь', price: 500 },
    { title: 'Клавиатура', price: 1000 },
    { title: 'Монитор', price: 7000 },
];

// ? Нужно использовать let

let getGoodsItem = (title, price) => {
    return `<div class="goods-item"><h2>${title}</h2><p>${price}</p></div>`;
}

// Один входной параметр, убрали скобки, const из - за перезаписи, стоит поменять на let
// Добавил параметры по умолчанию, для функции
// Запись затрудняюсь дальше упростить

let renderGoodsList = (list = [{title: 'Компьютер', price: 10000}]) => {
    let goodsList = list.map(listItem => getGoodsItem(listItem.title, listItem.price));
    document.querySelector('.goods-list').innerHTML = goodsList.join("");
}



renderGoodsList(goods);


