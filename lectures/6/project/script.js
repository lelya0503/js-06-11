const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class CartList {
    constructor() {
        this.cartGoods = [];
        this.fetchBasket();
    }

    addItem(item) {
        sendRequest('/addToBasket.json', 'POST', { item })
            .then((res) => {
                const { result } = JSON.parse(res);
                if (result === 1) {
                    this.cartGoods.push(item);
                    console.log(this.cartGoods);
                } else {
                    console.error('addItem Error');
                }
            });
    }

    removeItem(id) {
        sendRequest('/deleteFromBasket.json', 'DELETE', { id })
            .then((res) => {
                const { result } = JSON.parse(res);
                if (result === 1) {
                    const itemIndex = this.cartGoods.findIndex(item => item.id_product === id);
                    if (itemIndex !== -1) {
                        this.cartGoods.splice(itemIndex, 1);
                    }
                } else {
                    console.error('removeItem Error');
                }
            });
    }

    fetchBasket() {
        return new Promise((resolve, rejects) => {
            sendRequest('/getBasket.json')
                .then((result) => {
                    const { contents } = JSON.parse(result);
                    this.cartGoods = contents;
                    this.render();
                    resolve();
                });
        });
    }

    render() {
        
    }
}

// const cart = new CartList;
// const list = new GoodsList(cart);
// list.fetchGoods().then(() => list.render());

const app = new Vue({
    el: '#app',
    data: {
        goods: [],
        cartGoods: [],
        searchText: '',
        isCartVisible: false,
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
            this.cartGoods.push(item);
        },
        removeFromCart(id) {
            const index = this.cartGoods.find(({ id_product }) => id_product === id);
            if (index !== -1) {
                this.cartGoods.splice(index, 1);
            }
        },
        handleCartButtonClick() {
            this.isCartVisible = !this.isCartVisible;
        }
    },
    computed: {
        filteredGoods() {
            const regexp = new RegExp(this.searchText, 'i');
            return this.goods.filter(({ product_name }) => regexp.test(product_name));
        },
    }
});

