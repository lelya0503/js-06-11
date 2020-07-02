
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

<style scoped>
</style>
