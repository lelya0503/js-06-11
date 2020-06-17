class GoodsItem {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
  render() {
    return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
  }
}

class GoodsList {
  constructor() {
    this.goods = [];
  }
  fetchGoods() {
    this.goods = [
      { title: 'Arab shisha', price: 5000 },
      { title: 'Modern shisha', price: 7500 },
      { title: 'Classic shisha', price: 9000 },
      { title: 'Sheikh shisha', price: 30000 },
    ];
  }
    
  
    
  render() {
    let listHtml = '';
    let sum = 0;
    
    this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.title, good.price);
      listHtml += goodItem.render();
        sum += good.price; // Подсчет суммы в цикле        
    });      
      console.log(sum); // Вывод суммы      
    document.querySelector('.goods-list').innerHTML = listHtml;
  }
    
// Функция суммы отдельно    
    sumPrice() {
          let sum1 = 0;
        this.goods.forEach(good => {
            sum1 += good.price;            
        });
        console.log(sum1);
    } 
    
}

const list = new GoodsList();
list.fetchGoods();
list.render();
list.sumPrice(); // Вызов отдельной функции суммы




class backetItem {
    constructor(title, price){
        this.title = title;
        this.price = price;
        this.quantity =1;        
    }
    
}

class basket {
  constructor() {
      this.basketgoods = [];      
  }
    
    checkGoodsInBasket() {} // Проверяет наличие товара в корзине
    
    renderSum() {} // Пересчитывает сумму
    
    renderTable() {} // Перерисовывает таблицу и вставляет в html
    
    addGoodToBasket (){
        // Если товар присутсвует увеличиваем колличесво в таблице на 1
        // После каждого вызова функции пересчитываем сумму и отрисовываем таблицу
        
/*        
     if checkGoodsInBasket() return true {
         quantity +=1;
         renderSum();
         renderTable();
     }
        // Если нет, то выводим новую строку в таблицу с колличеством 1 и добавляем элемент в массив basketgoods
        // После каждого вызова функции пересчитываем сумму и отрисовываем таблицу
         else {             
             this.basketgoods.push(backetItem);
             let 
             renderSum();
             renderTable();
      }  
      */
    }    
  
  
    removeFromBasket() {} // удаляет элемент из корзины и вызыввает внутри метод перерисовки таблицы и пересчета суммы.
}



