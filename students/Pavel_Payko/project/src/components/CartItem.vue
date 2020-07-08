
<template>
  <div class="cart-item">
    <h2>{{ item.product_name }}</h2>
    <p>{{ item.price*item.amount }}</p>
    <button @click="$emit('amountDec', item)">-</button>
    <span>{{ item.amount }}</span>
    <button @click="$emit('amountInc', item)">+</button>
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
.cart-item {
  margin: 10px;
  background-color: lightgray;
  border: 4px solid darkgray;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
}

.cart-item p,
h2 {
  margin: 5px 0;
  width: 100%;
}
.cart-item button {
  margin: 0 5px 5px;
}
</style>
