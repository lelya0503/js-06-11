const app = new Vue({
    el: '#app',
    data: {
        name: 'GeekBrains',
        goods: [
            'Компьютер',
            'Мышь',
            'Монитор',
            'Клавиатура',
        ],
        searchText: '',
        obj: {
            key1: 'value1',
            key2: 'value2',
            key3: 'value3',
            key4: 'value4',
        }
    },
    methods: {
        goodsClickHandler() {
            // console.log('click');
        },
        toUpperCase(string) {
            return string.toUpperCase();
        },
        handleFormSubmit() {
            console.log('form submit');
        },
    },
    computed: {
        ucName: {
            get() {
                return this.name.toUpperCase();
            },
            set(value) {
                this.name = value.toLowerCase();
            }
        },
        isHeaderVisible() {
            return this.name.length > 0
        },
        
    },
    watch: {
        name(current, prev) {
            console.log(current, prev);
        },
    },
    mounted() {
        console.log('app mounted');
        document.addEventListener('click', this.goodsClickHandler);
    },
    beforeDestroy() {
        document.removeEventListener('click', this.goodsClickHandler);
    }
});
