
<template>
  <header class="header">
    <h1 class="header-name">eShop</h1>
    <div class="header-wrp">
      <label for="search">
        <input type="text" placeholder="searh here" v-model="componentSearchValue" />
        <button
          class="search-button"
          type="button"
          @click="$emit('getSearchValue', componentSearchValue)"
        >
          <span class="icon-search">S</span>
        </button>
      </label>
      <!-- <Search @getSearchValue="getSearchValue" :componentSearchValue="componentSearchValue" /> -->
      <button type="button" class="cart-button" @click="$emit('changeCartVisible')">
        <span class="icon-basket">C</span>
        <div class="count" v-if="cartGoods.length>0">{{ cartGoods.length }}</div>
      </button>
    </div>
  </header>
</template>

<script>
// import Search from "./Search.vue";

export default {
  name: "Header",
  // components: {
  //   Search
  // },
  props: {
    filterGoods: Function,
    cartGoods: Array
    // componentSearchValue: {
    //   type: String,
    //   default: ""
    // }
  },
  data() {
    return {
      componentSearchValue: ""
    };
  }
};
</script>

<style>
.icon-basket {
  font-family: "fontello";
  font-style: normal;
  font-weight: normal;
  text-decoration: inherit;
  text-align: center;
  font-size: 2em;
}
.header {
  background-color: rgba(0, 0, 0, 0.6);
  min-height: 50px;
  display: flex;
  justify-content: flex-end;
}
.header-name {
  color: whitesmoke;
  margin: auto;
  font-size: 3em;
  font-family: monospace;
}
.header-logo {
  color: whitesmoke;
  margin: auto 50px;
}
.cart-button {
  margin: 10px 50px;
  width: 50px;
  border-radius: 10px;
  outline: none;
}
</style>
