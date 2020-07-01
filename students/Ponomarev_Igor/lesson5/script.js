const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        goods: [],
        filteredGoods: [],
        selectedGoods: [],
        searchText: '',
        isVisibleCart: false,
        totalPrice: 0,
    },
    methods: {

        async sendRequest(url) {
            const res = await fetch(url);
            return res.json();
        },
        filterGoods() {
            const regexp = RegExp(this.searchText, 'i');
            this.filteredGoods = this.goods.filter(({ product_name }) => regexp.test(product_name));
        },
        visible() {
            this.isVisibleCart = !this.isVisibleCart;
        },
        addBasket(item) {
            this.selectedGoods.push(item);
            console.log(this.selectedGoods)
        },
        removeFromBasket(item) {
            this.selectedGoods.splice(
                this.selectedGoods.findIndex((i) => i === item), 1);
        },
    },

    computed: {
        calcPrice() {
            this.selectedGoods.forEach(({ price }) => this.totalPrice += price);
            return this.totalPrice;
        }
    },

    async mounted() {
        try {
            const goods = await this.sendRequest(`${API}/catalogData.json?page=1&sort=price`);
            this.goods = goods;
            this.filteredGoods = goods;
        } catch (err) {
            console.log('fetchGoods error status:', err)
        }
    },
})