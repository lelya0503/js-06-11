
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
