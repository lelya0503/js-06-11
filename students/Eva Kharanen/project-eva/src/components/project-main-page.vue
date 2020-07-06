<template>
    <body>
    <div id="app">
        <header>
            <div class="head">
                <div>
                    <h2>Магазин техники</h2>
                    <search :goods="goods"
                            :filteredGoods="filteredGoods"
                            @filterList="filterList"/>
                </div>
            </div>
        </header>
        <main>
            <div class="container">
                <div class="goods-list">
                    <pause>

                        <div class="goods-item"
                             @change="filterList"
                             v-for="good in filteredGoods"
                             :key="good.id_product">
                            <h3 class="title">{{ good.product_name }}</h3>
                            <p class="price ">{{ good.price }}</p>
                            <button class="btn" @click="() => addToTheBasket(good)">добавить в корзину
                            </button>
                        </div>
                    </pause>

                </div>
                <basket :basketItems="basketItems"
                        :filteredGoods="filteredGoods"
                        :goods="goods"
                        @getBasketItems="getBasketItems">
                </basket>
            </div>
        </main>
    </div>
    </body>
</template>

<script>
    import Basket from "./basket";
    import Search from "./search"
    import Pause from "./frame"


    //чтобы проверить задание со звезочкой slot раскоментируйте первый API_URL и закоментируйте второй

    // const API_URL = 'https://githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
    // const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
    const API_URL = 'http://localhost:3000';
    export default {
        name: 'projectMainPage',
        components: {Basket, Search, Pause},
        comments: {
            Basket,
            Search,
            Pause
        },

        data() {
            return {
                goods: [],
                filteredGoods: [],
                basketItems: []
            };
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
            getBasketItems() {
                this.makeGETRequest(`${API_URL}/basket`).then(basketItems => {
                    this.basketItems = basketItems;
                })
            },

            addToTheBasket(item) {
                fetch(`${API_URL}/basket`, {
                    method: 'POST',
                    body: JSON.stringify({
                        item
                    }),
                    headers:{
                        'Content-type': 'application/json',
                    },
                })
                .then((result)=>{
                    return result.json()
                })
                .then((data)=>{
                  if (data.result){
                      this.getBasketItems()
                      // this.basketItems.push(item)
                  }  else {
                      console.error('cant be add to Basket')
                  }
                })
                .catch((err)=>{
                    console.log(err)
                })
            },

            filterList(searchLine) {
                this.filteredGoods = this.goods.filter(good => {
                    return good.product_name.includes(searchLine)
                })
            },
        },
        mounted() {
            this.makeGETRequest(`${API_URL}/catalogData`, {}).then(goods => {
                this.goods = goods;
                this.filteredGoods = goods;
                this.getBasketItems();

            });
        }
    }
</script>

<style scoped>

    .head {
        width: 100vw;
        height: 150px;
        background-image: url('../assets/apple.jpeg');
        background-size: contain;
        background-color: rgba(211, 211, 211, 0.51);
        background-repeat: no-repeat;
        margin: 0 0 50px 0;
        padding: 20px;
        box-sizing: border-box;
        color: #828187;
        font-size: 34px;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
    }

    .goods-list {
        display: flex;
        width: 85%;
        justify-content: space-around;
    }

    .goods-item {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border: 1px solid grey;
        border-radius: 10px;
        height: 300px;
        width: 200px;
        margin-bottom: 10px;
    }

    .goods-item:hover {
        box-shadow: 7px 10px 5px 0px rgba(0, 0, 0, 0.75);
    }

    .title {
        display: flex;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        justify-content: center;
        align-items: center;
        width: 100%;
        min-height: 70px;
        background-color: darkgrey;
        text-align: center;
        color: white;
        margin: 0;
    }

    .price {
        display: flex;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        justify-content: center;
        align-items: center;
        width: 100%;
        min-height: 70px;
        text-align: center;
        color: green;
        margin: 0;
        font-size: 34px;
    }

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

    main {
        display: flex;
    }

    .container {
        display: flex;
        width: 100%;
    }

</style>
