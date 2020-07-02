<template>
  <div id="app">
    <Header
      :filterGoods="filterGoods"
      :cartGoods="cartGoods"
      @getSearchValue="getSearchValue"
      @changeCartVisible="changeCartVisible"
    />
    <main>
      <GoodsList :filteredGoods="filteredGoods" @addToCart="addToCart" />
      <CartList
        :isCartVisible="isCartVisible"
        :cartGoods="cartGoods"
        @removeFromCart="removeFromCart"
      />
    </main>
    <Error v-if="fetchError" />
  </div>
</template>

<script>
const API =
  "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";

import Header from "./components/Header.vue";
import GoodsList from "./components/GoodsList.vue";
import CartList from "./components/CartList";
import Error from "./components/Error";

export default {
  name: "App",
  components: {
    GoodsList,
    Header,
    CartList,
    Error
  },
  data() {
    return {
      goods: [],
      cartGoods: [],
      filteredGoods: [],
      searchValue: "",
      isCartVisible: false,
      fetchError: false
    };
  },
  methods: {
    changeCartVisible() {
      this.isCartVisible = !this.isCartVisible;
    },
    getSearchValue(value) {
      this.searchValue = value;
      this.filterGoods();
    },
    fetchGoods() {
      fetch(`${API}/catalogData.json`)
        .then(result => {
          return result.json();
        })
        .then(data => {
          this.goods = data;
          this.filteredGoods = data;
        })
        .catch(() => (this.fetchError = true));
    },
    addToCart(item) {
      this.cartGoods.push(item);
    },
    removeFromCart(item) {
      let toRemove = this.cartGoods.findIndex(pos => {
        return item.product_name === pos.product_name;
      });
      if (toRemove != -1) console.log(toRemove);
      this.cartGoods.splice(toRemove, 1);
    },
    filterGoods() {
      console.log("filter");
      const regexp = new RegExp(this.searchValue, "i");
      this.filteredGoods = this.goods.filter(item =>
        regexp.test(item.product_name)
      );
    }
  },
  mounted() {
    this.fetchGoods();
  }
  // computed: {
  //     filterGoods() {
  //         const regexp = new RegExp(this.searchValue, 'i');
  //         return this.goods.filter(({ product_name }) => regexp.test(product_name))
  //     }
  // }
};
</script>

<style>
@font-face {
  font-family: "fontello";
  src: url("./assets/font/fontello.eot?21027825");
  src: url("./assets/font/fontello.eot?21027825#iefix")
      format("embedded-opentype"),
    url("./assets/font/fontello.woff2?21027825") format("woff2"),
    url("./assets/font/fontello.woff?21027825") format("woff"),
    url("./assets/font/fontello.ttf?21027825") format("truetype"),
    url("./assets/font/fontello.svg?21027825#fontello") format("svg");
  font-weight: normal;
  font-style: normal;
}

body {
  background: radial-gradient(
      circle,
      transparent 20%,
      slategray 20%,
      slategray 80%,
      transparent 80%,
      transparent
    ),
    radial-gradient(
        circle,
        transparent 20%,
        slategray 20%,
        slategray 80%,
        transparent 80%,
        transparent
      )
      50px 50px,
    linear-gradient(#a8b1bb 8px, transparent 8px) 0 -4px,
    linear-gradient(90deg, #a8b1bb 8px, transparent 8px) -4px 0;
  background-color: slategray;
  background-size: 100px 100px, 100px 100px, 50px 50px, 50px 50px;
  padding: 0 50px;
}

main {
  background-color: rgba(255, 255, 255, 0.4);
  display: flex;
}
.goods-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: min-content;
  width: 75%;
}
.basket-list {
  width: 25%;
}
.goods-item,
.basket-item {
  margin: 10px;
  background-color: lightgray;
  border: 4px solid darkgray;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.goods-item p,
h2,
button {
  margin: 5px 0;
}

.basket-item p,
h2,
button {
  margin: 5px 0;
}
</style>
