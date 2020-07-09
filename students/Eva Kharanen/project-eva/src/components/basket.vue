<template>
    <div class="basket-container">
        <button v-show="basketItems.length > 0"
                type="button"
                class="cart-button"
                @click="clearBasket()">Очистить корзину
            <svg aria-hidden="true"
                 focusable="false"
                 data-prefix="fas"
                 data-icon="shopping-basket"
                 class="basket svg-inline--fa fa-shopping-basket fa-w-18"
                 role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path fill="currentColor"
                      d="M576 216v16c0 13.255-10.745 24-24 24h-8l-26.113 182.788C514.509 462.435 494.257 480 470.37 480H105.63c-23.887 0-44.139-17.565-47.518-41.212L32 256h-8c-13.255 0-24-10.745-24-24v-16c0-13.255 10.745-24 24-24h67.341l106.78-146.821c10.395-14.292 30.407-17.453 44.701-7.058 14.293 10.395 17.453 30.408 7.058 44.701L170.477 192h235.046L326.12 82.821c-10.395-14.292-7.234-34.306 7.059-44.701 14.291-10.395 34.306-7.235 44.701 7.058L484.659 192H552c13.255 0 24 10.745 24 24zM312 392V280c0-13.255-10.745-24-24-24s-24 10.745-24 24v112c0 13.255 10.745 24 24 24s24-10.745 24-24zm112 0V280c0-13.255-10.745-24-24-24s-24 10.745-24 24v112c0 13.255 10.745 24 24 24s24-10.745 24-24zm-224 0V280c0-13.255-10.745-24-24-24s-24 10.745-24 24v112c0 13.255 10.745 24 24 24s24-10.745 24-24z"></path>
            </svg>
        </button>
        <div v-show="basketItems.length === 0"
             class="empty">Корзина пустая
        </div>
        <div class="goods-item-basket"
             v-for="good in basketItems" :key="good.id_product">
            <h3>{{ good.product_name }}</h3>
            <p>Цена:{{ good.price }}р, Кол-во:{{ good.amount }}</p>
            <button class="btn" @click="(removeFromTheBasket(good.id_product))">Убрать из корзины</button>
        </div>
    </div>
</template>
<script>
    const API_URL = 'http://localhost:3000';

    export default {
        name: 'Basket',
        props: {
            filteredGoods: Array,
            goods: Array,
            basketItems: Array,
        },

        methods: {
            makeGETRequest(url, payload = {}) {
                return new Promise((resolve) => {
                    const xhr = new XMLHttpRequest();
                    xhr.onload = () => {
                        resolve(JSON.parse(xhr.responseText))
                    }
                    xhr.open('GET', url, true);
                    xhr.send(payload);
                })
            },
            getBasketItems(){
                this.$emit('getBasketItems')
            },
            removeFromTheBasket(id) {
                fetch(`${API_URL}/basket/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-type': 'application/json',
                    },
                })
                .then(()=>{
                    this.getBasketItems()
                })
            },
            clearBasket() {
                return this.basketItems = [];
            },
        },
    }


</script>
<style>

    .btn {
        width: 80%;
        height: 50px;
        background-color: #FF7236;
        margin: 0 auto 20px auto;
        border-radius: 10px;
        color: white;
        font-size: 16px;
    }

    .btn:hover {
        background-color: #ffa100;
    }

    .btn:active {
        background-color: #FF7236;
    }

    .btn:focus {
        outline: none;
    }

    .basket {
        width: 30px;
        height: auto;
    }

    .basket-container {
        display: flex;
        flex-direction: column;
    }

    .empty {
        background: #B0E0E6;
        width: 200px;
        height: 250px;
        border-radius: 10px;
        text-align: center;
        font-size: 34px;
        color: white;
    }

    .cart-button {
        float: right;
        width: 200px;
        height: 50px;
        display: flex;
        justify-content: space-around;
        font-size: 18px;
        color: #828187;
        border: none;
        border-radius: 10px;
        align-items: center;
    }

    .cart-button:hover {
        background-color: #343a40;
        color: white;
    }

    .cart-button:focus {
        outline: none;
    }

    .cart-button:active {
        color: #828187;
    }

    .goods-item-basket {
        border: 1px solid green;
        border-radius: 10px;
        min-width: 200px;
        min-height: 200px;

    }

</style>