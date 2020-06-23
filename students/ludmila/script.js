const goods = [
    { title: 'Компьютер', price: 10000 },
    { title: 'Мышь', price: 500 },
    { title: 'Клавиатура', price: 1000 },
    { title: 'Монитор', price: 7000 },
];

function getGoodsItem (title='Ноутбук', price=20000) {
    
return `<div class="goods-item"><h2>${title}</h2><p>${price}</p></div>`;

}

function renderGoodsList(list) {
    
	const goodsList = list.map(listItem => getGoodsItem(listItem.title, listItem.price));
   var goodsList1 ='';
  goodsList.forEach(function(entry) {
 //console.log(goodList1);
  goodsList1 += entry;
   });
  document.querySelector('.goods-list').innerHTML = goodsList1;
}

renderGoodsList(goods);