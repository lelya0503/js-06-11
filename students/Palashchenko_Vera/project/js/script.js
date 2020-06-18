const goods = [
  { title: 'Компьютер', price: 10000, img: 'img/comp.jpg' },
  { title: 'Мышь', price: 500, img: 'img/mouse.jpg' },
  { title: 'Клавиатура', price: 1000, img: 'img/2.jpg' },
  { title: 'Монитор', price: 7000, img: 'img/monitor.jpg' },
];

const getGoodsItem = (
  title = 'Компьютер',
  price = 10000,
  img = 'img/comp.jpg'
) => {
  return `<div class="goods-item">
            <h2>${title}</h2>
            <img src=${img} alt=${title} />
            <div class="goods-item__price">
              <p>${price} р.</p>
              <button >Купить</button>
            </div>
          </div>`;
};

const renderGoodsList = (list) => {
  const goodsList = list
    .map((listItem) =>
      getGoodsItem(listItem.title, listItem.price, listItem.img)
    )
    .join(' ');
  document.querySelector('.goods-list').innerHTML = goodsList;
};

// Запятая - map возвращает массив - здесь при переборе данные разделяются запятой,
// так как массив преобразуется в строку, join позволяет указывать,
// как можно разделить данные, в конкретном примере- пробелом

// Как пример - оставить одну функцию, правда немного теряется ее читабельность

// const renderGoodsList = (list) => {
//   const goodsList = list
//     .map(
//       (listItem) =>
//         `<div class="goods-item">
//             <h2>${listItem.title}</h2>
//             <img src=${listItem.img} alt=${listItem.title} />
//             <div class="goods-item__price">
//               <p>${listItem.price} р.</p>
//               <button >Купить</button>
//             </div>
//           </div>`
//     )
//     .join(' ');
//   document.querySelector('.goods-list').innerHTML = goodsList;
// };

renderGoodsList(goods);
