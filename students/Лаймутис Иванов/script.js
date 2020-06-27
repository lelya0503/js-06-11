const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';  

const app = new Vue({
    el: '#app',
    data: {
        goods: [],
        cartGoods: [],
        filteredGoods: [],
        searchLine: '',
        isVisibleCart: false,
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
                  this.filteredGoods = this.goods;
                
        //      this.goods = [];
        //        Реализация случая когда не приходят данные и выводим нет данных.
                   if (this.goods.length ===0) {                
                        this.goods = [{product_name: "No Data", price: ""}];
           }                  
                   
                 });
        },
        addToCart(item) {
            console.log(item);
            this.cartGoods.push(item);
        },
        removeFromCart(id) {
            const index = this.cartGoods.find(({ id_product }) => id_product === id);
            if (index !== -1) {
                this.cartGoods.splice(index, 1);
            }
        },
        
      filterGoods(value) {
          const regexp = new RegExp(value, 'i');
          this.filteredGoods = this.goods.filter(({ product_name }) => regexp.test(product_name));          
      }
        
    }
});
