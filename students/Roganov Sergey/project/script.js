const API =
  "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";

function sendRequest(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(xhr.responseText);
        } else {
          reject(xhr.responseText);
        }
      }
    };

    xhr.open("GET", `${API}${url}`, true);
    xhr.send();
  });
}

class GoodsItem {
  constructor(product_name, price) {
    this.product_name = product_name;
    this.price = price;
  }

  render() {
    return `<div class="goods-item">
          <h2>${this.product_name}</h2>
          <p>${this.price}</p>
          <button name="add-to-cart">Добавить в корзину</button>
      </div>`;
  }
}

class GoodsList {
  constructor() {
    this.goods = [];
  }

  fetchGoods() {
    return new Promise((resolve, rejects) => {
      sendRequest("/catalogData.json").then((result) => {
        this.goods = JSON.parse(result);
        resolve();
      });
    });
  }

  render() {
    let goodsLayout = "";
    this.goods.forEach(({ product_name, price }) => {
      const item = new GoodsItem(product_name, price);
      goodsLayout += item.render();
    });
    document.querySelector(".goods-list").innerHTML = goodsLayout;
  }
}

class CartItem {
  constructor(product_name, price) {
    this.product_name = product_name;
    this.price = price;
  }
}

class CartList {
  constructor() {
    this.cartGoods = [];
    this.fetchCart();
  }

  addItem(item) {
    sendRequest("/addToBasket.json", "POST", { item }).then((res) => {
      const { result } = JSON.parse(res);
      if (result === 1) {
        this.cartGoods.push(item);
      } else {
        console.error("addItem error");
      }
    });
  }

  removeItem(id) {
    sendRequest("/deleteFromBasket.json", "DELETE", { id }).then((res) => {
      const { result } = JSON.parse(res);
      if (result === 1) {
        const itemIndex = this.cartGoods.findIndex(
          (item) => item.id_product === id
        );
        if (itemIndex !== -1) {
          this.cartGoods.splice(itemIndex, 1);
        }
      } else {
        console.error("removeItem error");
      }
    });
  }

  fetchCart() {
    return new Promise((resolve, reject) => {
      sendRequest("/getBasket.json").then((result) => {
        const { contents } = JSON.parse(result);
        this.cartGoods = contents;
        this.render;
        resolve();
      });
    });
  }
  render() {}
}

const cart = new CartList();

const list = new GoodsList();
list.fetchGoods().then(() => list.render());
//   // Метод считающим сумму товаров

//   getSumm() {
//     let summ = 0;
//     for (let i = 0; i <= this.goods.length; i++) {
//       summ += this.goods[i].price; // метод считающий сумму
//       return summ;
//     }
//   }
// }

// const list = new GoodsList();
// list.fetchGoods().then(() => list.render());

// // Класс для корзины товаров, с методами добавляющим в корзину, удаляющим из нее, подсчитывающим сумму товара и отрисовыванием товаров в корзине
// class Basket {
//   constructor() {
//     this.basketGoods = [];
//   }

//   addGood() {
//     this.basketGoods.push(); // метод добавления в корзину товара
//   }

//   deleteGood() {
//     this.basketGoods.splice(); // метод удаляющий товар из корзины
//   }

//   getSumm() {
//     let summ = 0;
//     for (let i = 1; i <= this.basketGoods.length; i++) {
//       summ += this.basketGoods[i]; // метод считающий сумму товара в корзине
//     }
//   }

//   renderBasket() {
//     return `<div class="Basket-item">
//           <h2>${this.title}</h2>
//           <p>${this.price}</p>
//       </div>`; // метод отрисовывающий товары в корзине
//   }
// }
