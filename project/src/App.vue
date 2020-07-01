<template>
  <div id="app">
    <Header>
      <input type="text" class="goods-search" v-model="searchText" />
      <button type="button" class="search-button">Искать</button>
      <button
        type="button"
        class="cart-button"
        v-on:click="isCartVisible = !isCartVisible"
      >
        Корзина
      </button>
      <div class="cart" v-if="isCartVisible">
        <div
          class="cart-item"
          v-for="item in cartGoods"
          v-bind:key="item.id_product"
        >
          <h3>{{ item.product_name }}</h3>
          <p>{{ item.price }}</p>
        </div>
      </div>
    </Header>
    <GoodsList
      @addToCart="addToCart"
      :filteredGoods="filteredGoods"
      emptyGoodsMessage="Товаров нет"
    />
  </div>
</template>

<script>
import GoodsList from "./components/GoodsList.vue";
import Header from "./components/Header.vue";

const API =
  "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";

export default {
  name: "App",
  components: {
    GoodsList,
    Header,
  },
  data() {
    return {
      goods: [],
      cartGoods: [],
      searchText: "",
      isCartVisible: false,
    };
  },
  mounted() {
    this.fetchGoods();
  },
  methods: {
    fetchGoods() {
      fetch(`${API}/catalogData.json`)
        .then((result) => {
          return result.json();
        })
        .then((data) => {
          this.goods = data;
        });
    },
    addToCart(item) {
      this.cartGoods.push(item);
    },
    removeFromCart(id) {
      const index = this.cartGoods.find(({ id_product }) => id_product === id);
      if (index !== -1) {
        this.cartGoods.splice(index, 1);
      }
    },
    handleCartButtonClick() {
      this.isCartVisible = !this.isCartVisible;
    },
  },
  computed: {
    filteredGoods() {
      const regexp = new RegExp(this.searchText, "i");
      return this.goods.filter(({ product_name }) => regexp.test(product_name));
    },
  },
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

.cart {
  position: absolute;
  width: 300px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  background: #fff;
  padding: 10px 15px;
  top: 100px;
}

.cart-item {
  margin-bottom: 10px;
}

.goods-list {
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
