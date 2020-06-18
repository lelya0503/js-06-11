const goods = [
  {title: "Эконом" , size: "90х70х180", area: "0,63", dayPrice: 100, img: "../img/1.jpg"},
  {title: "Эконом плюс" , size: "90х100х180", area: "0,9", dayPrice: 200, img: "../img/2.jpg"},
  {title: "Комфорт" , size: "100х125х180", area: "1,13", dayPrice: 250, img: "../img/3.jpg"},
  {title: "Сьют" , size: "125х125х180", area: "1,56", dayPrice: 350, img: "../img/4.jpg"},
  {title: "Люкс" , size: "160х160х180", area: "2,56", dayPrice: 500, img: "../img/5.jpg"},
  {title: "Супер-люкс" , size: "180х160х180", area: "2,88", dayPrice: 600, img: "../img/6.jpg"},
];

const getGoodItem = (title, size, area, dayPrice, img = "https://placem.at/places?w=270&h=185") => {
  return `<div class="catalog_item">
            <img class="catalog_item_img" src="${img}" alt="photo" width="270" height="185">
            <div class="catalog_item_info">
              <h2 class="catalog_item_title">${title}</h2>
              <p class="catalog_item_text">Размеры (ШхГхВ) -  ${size} см</p>
              <p class="catalog_item_text">Площадь - ${area} м<sup>2</sup></p>
              <p class="catalog_item_text">Стоимоить в сутки: <span class="catalog_item_price">${dayPrice}₽</span></p>
            </div>
            <button class="booking_btn">Забронировать</button>
            <div class="booking_btn_icon"></div>
          </div>`
};

// const renderGoodList2 = (list) => {
//   const goodList = [];
//   list.forEach(listItem => {
//     let goodListCard = getGoodItem(listItem.title, listItem.size, listItem.area, listItem.dayPrice, listItem.img);
//     goodList.push(goodListCard);     
//   }); 
//   document.querySelector('.catalog_item_wrap').innerHTML = goodList.join("");  
// };
// renderGoodList2(goods);

const renderGoodList1 = (list) => {
  const goodList =  list.map(listItem => getGoodItem(listItem.title, listItem.size, listItem.area, listItem.dayPrice, listItem.img));
  document.querySelector('.catalog_item_wrap').innerHTML = goodList.join('');
};
renderGoodList1(goods);
