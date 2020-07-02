'use strict';
/*const goods = [
    { title: 'Компьютер', price: 10000 },
    { title: 'Мышь', price: 500 },
    { title: 'Клавиатура', price: 1000 },
    { title: 'Монитор', price: 7000 },
];

const getGoodsItem = (title, price) => {
    return `<div class="goods-item">
        <h2>${title}</h2>
        <p>${price}</p>
        <button class="buy-btn">В корзину</button>
    </div>`;
}

const renderGoodsList = (list) => {
    const goodsList = list.map(listItem => getGoodsItem(listItem.title, listItem.price));
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
}

renderGoodsList(goods);
*/
class GoodsItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    
    render() {
        return `<div class="goods-item">
            <h2>${this.title}</h2>
            <p>${this.price}</p>
            <button class="buy-btn">В корзину</button>
        </div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }

    fetchGoods() {
        this.goods = [
            { title: 'Компьютер', price: 10000 },
            { title: 'Мышь', price: 500 },
            { title: 'Клавиатура', price: 1000 },
            { title: 'Монитор', price: 7000 },
            { title: 'Колонки', price: 600 },
        ];
    }

    render() {
        let goodsLayout = '';
        this.goods.forEach(({ title, price }) => {
            const item = new GoodsItem(title, price);
            goodsLayout += item.render();
        });
        document.querySelector('.goods-list').innerHTML = goodsLayout;
    }
    priceSum() {
        let sum = 0;
        this.goods.forEach(good => {
            sum += good.price
        })
        return sum
    }// метод вывода общей суммы
}

const list = new GoodsList;
list.fetchGoods();
list.render();
console.log(list.priceSum());

class BasketItem extends GoodsItem{
    constructor( title, price, volume=1){ //объекты корзины должны наследоваться от классов GoodsItem, но с добавление свйства Volume - кол-во)
        super(title, price);
        this.volume=volume;
        this.summaryPrice=this.price*this.volume; // итоговая сумма с учетом кол-ва товара

    }
    addVolume(){
        this.volume = this.volume + 1;
    }
    delVolume(){
        if (this.volume >0){
            
        this.volume = this.volume - 1;
        } else {} // здесь предполагаю требуется или ничего не делать, или применить мето удаления объектра из корзины
    }
}
class BasketList extends GoodList{
    constructor(){
        this.goods = [];
    }
    delItem(){

    } //метод для удаления товара
    showItem(){

    }// метод для показа всех товаров
    addItem(){

    }// добавление товара
    clearAll(){

    }// очистка корзины
    buyItem(){

    }// оформление покупки

    
}
// идея в том ,чтобы наследовать предыдущие классы с добавлением новых методов. Есть затруднения где какой метод указывать 