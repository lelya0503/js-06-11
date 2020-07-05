<template>
  <div class="cart-list" v-if="isCartVisible">
    <CartItem
      v-for="item in cartGoods"
      :key="item.id_product"
      :item="item"
      @removeFromCart="removeFromCart"
      @amountInc="amountInc"
      @amountDec="amountDec"
    />
  </div>
</template>

<script>
import CartItem from "./CartItem.vue";
export default {
  name: "CartList",
  components: {
    CartItem
  },
  props: {
    isCartVisible: {
      type: Boolean
    },
    cartGoods: {
      type: Array,
      required: false,
      default: () => []
    },
    filteredGoods: {
      type: Array,
      required: false,
      default: () => []
    }
  },
  methods: {
    removeFromCart(item) {
      this.$emit("removeFromCart", item);
    },
    amountInc(item) {
      this.$emit("amountInc", item);
    },
    amountDec(item) {
      this.$emit("amountDec", item);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cart-list {
  background-color: rgba(0, 0, 0, 0.7);
  width: 25%;
}
</style>
