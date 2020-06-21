const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

function makeGETRequest(url) {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onload = function () {
            if (xhr.readyState === 4) {
                resolve(JSON.parse(this.response));
            } else {
                const error = new Error(this.statusText);
                error.code = this.status;
                reject(error);
            }
        };
        xhr.send();
    });
}

class GoodsItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    render() {
        return `
            <div class="goods_item">
                <div class="goods_img"></div>  
                <h3>${this.title}</h3>
                <p>${this.price}</p>
            </div>
        `;
    }
}
class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        makeGETRequest(`${API_URL}/catalogData.json`)
            .then(
                //response => console.log(typeof (response)),
                response => this.goods = response,
                error => console.log(`Rejected ${error}`),
            )
            .then( () => {
                    return this.render();
                }
            )
    }
    summary() {
    }
    render() {
        let goodsLayout = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.product_name, good.price);
            goodsLayout += goodItem.render();
        });
        document.querySelector('.goods_container').innerHTML = goodsLayout;
    }
}

const list = new GoodsList();
list.fetchGoods();

//Собственно у меня сделано 1-ое и 3-е (вроде бы) задания. Второе задание я не сделал, ибо мне показалось оно
//очень расплывчитым, учитывая, что удалить я ничего по URL не могу, добавить тоже. По сути это были бы те же GET запросы,
//на response которых я бы подстраивал какие-то заглушки? Не понял.