  const goods = [
      { title: 'Shirt', price: 150 },
      { title: 'Socks', price: 50 },
      { title: 'Jacket', price: 350 },
      { title: 'Shoes', price: 250 },
  ];

  const renderGoodsItem = (obj) => {
      let { title, price } = obj
      return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
  };
  const createGoodsList = (arr = []) => {
      for (let i = 0; i < arr.length; i++) {
          let goodsList = renderGoodsItem(arr[i])
          document.querySelector('.goods-list').innerHTML = document.querySelector('.goods-list').innerHTML + goodsList;
      }
  }

  createGoodsList(goods)