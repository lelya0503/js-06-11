
<template>
  <div class="goods-item">
    <h2>{{ item.product_name }}</h2>
    <p>{{ item.price }}</p>
    <button @click="$emit('addToCart', item)">Купить</button>
  </div>
</template>

<script>
export default {
  name: "GoodsItem",
  props: {
    item: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
</style>
