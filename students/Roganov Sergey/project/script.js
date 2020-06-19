const goods = [
  { title: "Компьютер", price: 10000 },
  { title: "Мышь", price: 500 },
  { title: "Клавиатура", price: 1000 },
  { title: "Монитор", price: 7000 },
];

const getGoodsItem = (title, price) => {
  return `<div class="goods-item"><h2>${title}</h2><p>${price}</p></div>`;
};

const renderGoodsList = (list = [{ title: "Название", price: "Цена" }]) => {
  const goodsList = list.map((listItem) =>
    getGoodsItem(listItem.title, listItem.price)
  );
  document.querySelector(".goods-list").innerHTML = goodsList;
};

renderGoodsList(goods);
