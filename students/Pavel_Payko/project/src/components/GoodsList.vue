<template>
  <div class="goods-list">
    <span v-if="!filteredGoods.length" style="text-align: center;">Список товаров пуст</span>
    <GoodsItem
      v-for="item in filteredGoods"
      :key="item.id_product"
      :item="item"
      @addToCart="addToCart"
    />
  </div>
</template>

<script>
import GoodsItem from "./GoodsItem.vue";
export default {
  name: "GoodsList",
  components: {
    GoodsItem
  },
  props: {
    filteredGoods: {
      type: Array,
      required: false,
      default: () => []
    }
  },
  methods: {
    addToCart(item) {
      this.$emit("addToCart", item);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.goods-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: repeat(auto-fill, 130px);
  width: 100%;
}
</style>
