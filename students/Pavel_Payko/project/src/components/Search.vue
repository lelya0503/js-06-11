
<template>
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
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      componentSearchValue: ""
    };
  }
};
</script>

<style scoped>
</style>
