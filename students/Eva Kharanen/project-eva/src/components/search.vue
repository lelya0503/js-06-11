<template>
    <div>
        <input class="search"
               type="text"
               placeholder="введите текст"
               v-model="searchLine">
        <button class="search-button" type="button" @click="filterList()">Искать</button>
    </div>
</template>
<script>
    export default {
        name: 'Search',
        data() {
            return {
                searchLine: ''
            }
        },
        props:
            {
                goods: Array,
                filteredGoods: Array,
            },

        methods: {
            filterList() {
                this.$emit('filterList', this.searchLine)
            }
        }
    }

</script>
<style>

    .search {
        height: 30px;
        box-sizing: border-box;
    }

    .search-button {
        height: 30px;
        box-sizing: border-box;
    }

</style>