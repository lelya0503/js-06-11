
<template>
  <div class="cart-item">
    <h2>{{ item.product_name }}</h2>
    <p>{{ item.price }}</p>
    <button @click="$emit('removeFromCart', item)">Удалить</button>
  </div>
</template>

<script>
export default {
  name: "CartItem",
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
