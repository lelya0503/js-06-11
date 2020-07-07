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
        @amountInc="amountInc"
        @amountDec="amountDec"
      />
    </main>
    <Error v-if="fetchError" />
  </div>
</template>

<script>
const API = "http://localhost:3000";

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
      fetch(`${API}/catalog`)
        .then(result => {
          return result.json();
        })
        .then(data => {
          this.goods = data;
          this.filteredGoods = data;
        })
        .catch(() => (this.fetchError = true));
    },
    fetchCart() {
      fetch(`${API}/cart`)
        .then(result => {
          return result.json();
        })
        .then(data => {
          this.cartGoods = data;
        })
        .catch(err => console.error(err));
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
          console.log("data result", data.result);
          console.log("data item", item);
          if (data.result) {
            const check = this.amountCheck(item);
            console.log(check);
            if (check) {
              let i = this.cartGoods.findIndex(pos => {
                return item.id === pos.id;
              });
              if (i != -1) {
                const toSplice = this.cartGoods[i];
                toSplice.amount++;
                console.log(i);
                this.cartGoods.splice(i, 1, toSplice);
              }
            } else if (!check) {
              this.cartGoods.push(item);
              this.cartGoods[this.cartGoods.length - 1].amount = 1;
            } else {
              alert("Something wrong");
            }
          }
        })
        .catch(err => console.error(err));
    },
    amountCheck(item) {
      let toCheck = this.cartGoods.findIndex(pos => {
        return item.id === pos.id;
      });
      if (toCheck != -1) {
        return true;
      } else {
        return false;
      }
    },
    removeFromCart(item) {
      fetch(`${API}/removeFromCart`, {
        method: "DELETE",
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
            let toRemove = this.cartGoods.findIndex(pos => {
              return item.product_name === pos.product_name;
            });
            if (toRemove != -1) {
              console.log(toRemove);
              this.cartGoods.splice(toRemove, 1);
            }
          }
        })
        .catch(err => console.error(err));
    },
    filterGoods() {
      console.log("filter");
      const regexp = new RegExp(this.searchValue, "i");
      this.filteredGoods = this.goods.filter(item =>
        regexp.test(item.product_name)
      );
    },
    amountInc(item) {
      fetch(`${API}/amountInc`, {
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
            item.amount++;
          }
        });
    },
    amountDec(item) {
      fetch(`${API}/amountDec`, {
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
            item.amount--;
          }
        });
    }
  },
  mounted() {
    this.fetchGoods();
    this.fetchCart();
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
</style>
