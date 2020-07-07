const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        goods: [],
        cartGoods: [],
        filteredGoods: [],
        searchLine: '',
        searchproduct: '',
        isVisibleCart: true,
    },
    mounted() {
        this.fetchGoods();
    },
    methods: {
        fetchGoods() {
            fetch(`${API}/catalogData.json`)
                .then((result) => {
                    return result.json();
                })
                .then((data) => {
                    this.goods = data;
                });
        },
        addToCart(item) {
            console.log(item);
            this.cartGoods.push(item);
        },
        removeFromCart(id) {
            const index = this.cartGoods.find(({
                id_product
            }) => id_product === id);
            if (index !== -1) {
                this.cartGoods.splice(index, 1);
            }
        },
        filterGoods() {
            this.searchproduct = this.searchLine;
            this.searchLine = '';
        },
    }
});
