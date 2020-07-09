
<template>
 <div id="app">
  <Header>
   <SearchBlock @filterGoods="filterGoods"></SearchBlock>
   <BasketPanel :cartGoods="cartGoods" @handleCartButtonClick="handleCartButtonClick"></BasketPanel>
   <BasketList
    v-if="isCartVisible"
    :cartGoods="cartGoods"
    @removeItem="removeItem"
    @addItem="addItem"
    @reduceItem="reduceItem"
   />
  </Header>
  <GoodsList @addToCart="addToCart" :filteredGoods="filteredGoods" />
 </div>
</template>

<script>
import GoodsList from "./components/GoodsList.vue";
import BasketList from "./components/BasketList.vue";
import Header from "./components/Header.vue";
import SearchBlock from "./components/SearchBlock.vue";
import BasketPanel from "./components/BasketPanel.vue";
const API = "http://localhost:3000";
export default {
 name: "App",
 components: {
  GoodsList,
  Header,
  BasketList,
  SearchBlock,
  BasketPanel
 },
 data() {
  return {
   goods: [],
   cartGoods: [],
   isCartVisible: false,
   filteredGoods: []
  };
 },
 mounted() {
  this.fetchGoods();
  this.fetchCart();
 },
 methods: {
  fetchGoods() {
   fetch(`${API}/catalog`)
    .then(result => {
     return result.json();
    })
    .then(data => {
     this.goods = data;
     this.filteredGoods = data;
    })
    .catch(err => {
     console.error(err);
    });
  },
  handleCartButtonClick() {
   if (this.cartGoods.length != 0) {
    this.isCartVisible = !this.isCartVisible;
   } else {
    this.isCartVisible = false;
    alert("Добавьте товар в корзину");
   }
  },
  fetchCart() {
   fetch(`${API}/cart`)
    .then(result => {
     return result.json();
    })
    .then(data => {
     this.cartGoods = data;
    })
    .catch(err => {
     console.error(err);
    });
  },
  addToCart(item) {
   fetch(`${API}/addToCart`, {
    method: "POST",
    body: JSON.stringify({ item }),
    headers: {
     "Content-Type": "application/json"
    }
   })
    .then(result => {
     return result.json();
    })
    .then(data => {
     if (data.result) {
      if (item.quantity > 0) {
       item.quantity++;
      } else {
       item.quantity++;
       this.cartGoods.push(item);
      }
     } else {
      console.error("Cant add item to cart");
     }
    })
    .catch(err => {
     console.error("Ошибка! " + err);
    });
  },
  removeItem(item) {
   fetch(`${API}/removeToCart`, {
    method: "POST",
    body: JSON.stringify({ item }),
    headers: {
     "Content-Type": "application/json"
    }
   })
    .then(result => {
     return result.json();
    })
    .then(data => {
     if (data.result) {
      const itemIndex = this.cartGoods.findIndex(
       elem => elem.id_product == item.id_product
      );
      if (item.quantity > 0) {
       item.quantity = 0;
      }
      this.cartGoods.splice(itemIndex, 1);
     }
    })
    .catch(err => {
     console.error("Ошибка! " + err);
    });
  },
  filterGoods(searchText) {
   const regexp = new RegExp(searchText, "i");
   this.filteredGoods = this.goods.filter(good =>
    regexp.test(good.product_name)
   );
  },
  reduceItem(item) {
   if (item.quantity != 0) {
    item.quantity--;
   }
  },
  addItem(item) {
   item.quantity++;
   console.log(this.cartGoods);
  }
 }
};
</script>

<style>
*,
*::after,
*::before {
 box-sizing: border-box;
}
body {
 margin: 0;
 font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI",
  "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
  "Helvetica Neue", sans-serif;
 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;
 background-color: #f9fafc;
}
.cart-button {
 border: none;
 border-radius: 20px;
 padding: 7px 20px;
 background: #0b5bb8;
 font-size: 16px;
 font-weight: 600;
 font-family: inherit;
 cursor: pointer;
 color: #fff;
}
.cart-button:focus {
 outline: none;
 background: #0c50a0;
}
.cart-button:hover {
 background: #3b7eb9;
}
</style>

