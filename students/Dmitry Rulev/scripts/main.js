'use strict';
//Переделайте makeGETRequest() так, чтобы она использовала промисы.
//let makeGETRequest = (url) => {
   // return new Promise((resolve, reject ) => {
      //  let xhr = new XMLHttpRequest();

       // xhr.open('GET', url, true);
       // xhr.onreadystatechange = () => {
         //   const r = xhr.responseText;      
           // resolve(r);  
            // reject(console.log('error'));    
        // }
        // xhr.send();
    // });
// }
// makeGETRequest();

// class Products {
   // constructor(container = '.products'){
     //   this.container = container;
    // }
// }

// class Products {
//     constructor(container = '.products'){
//         this.container = container;
//         this.data = [];
//         this.allProducts = [];
//         this._getProducts()
//             .then(() => this._render());
//     }

//     _getProducts(){
//         return fetch(`${API}/catalogData.json`)
//             .then(result => result.json())
//             .then(data => {
//                 this.data = [...data];
//             })
//             .catch(error => console.log(error));
//     }
//     _render(){
//         const block = document.querySelector(this.container);
//         for (let el of this.data) {
//             const product = new ProductItem(el);
//             this.allProducts.push(product);
//             block.insertAdjacentHTML('beforeend', product.render())
//         }
//     }
// }


// class ProductItem {
//     constructor(el, img= 'https://placehold.it/250x200'){
//         this.id_product = el.id_product;
//         this.product_name = el.product_name;
//         this.price = el.price;
//         this.img = img;
//     }
//     render() {
//         return `<div class="products____product">
//         <img  class="products____image" src='${this.img}'>
//         <a href="#" class="products____link">${this.product_name}</a>
//         <p class = "products____price">$ ${this.price}</p>
//         <button class = "products____btn all-btn"> Купить </button>
//         </div>`
//     }
// }

// const products = new Products();










// //1. Добавьте пустые классы для корзины товаров и элемента корзины товаров. Продумайте, какие методы понадобятся для работы с этими сущностями.

// //  Cart корзина 
// class Cart {
//     constructor(){
//         /*
//         this.name           // Название товара.
//         this.quantity       // Количество товара.
//         this.price          // Стоимость товара.
//         this.image          // Картинка товара.
//         */
//     }

//     sumProducts(){}         // Считет сумму всех товаров.

//     removeProducts(){}      // Удаляет товар.

//     adjustmentProducts(){}  // Добавляет или убавляет количество товаров.

//     creatProducts(){}       // Создаетются блоки с товарами.
// }



//1 Дан большой текст, в котором для оформления прямой речи используются одинарные кавычки. Придумать шаблон, который заменяет одинарные кавычки на двойные.
//2 Улучшить шаблон так, чтобы в конструкциях типа aren't одинарная кавычка не заменялась на двойную.

class  ReplacementText {
    constructor(container = '.text') {
        this.container = container;
        this.getText();  
    }
    getText(){
        const data = document.querySelector(this.container);
        
        let rex = /'/g;     
        let res = data.innerHTML.replace((rex),'"');   

        rex = /\b"\b/g;
        res = res.replace((rex),'\'');       
        data.innerHTML = res;
    }
 
}

const replacementText = new ReplacementText();





// 3. *Создать форму обратной связи с полями: Имя, Телефон, E-mail, текст, кнопка Отправить. 
// При нажатии на кнопку Отправить произвести валидацию полей следующим образом:

class ContactForm {
    constructor(container = '.formBox'){
        this.container = container; 
        this.userName = [];
        this.userPhone = [];
        this.userEmail = [];

        this._init();  
    }
    validName(value) {
        let rex = /[А-Яа-яЁёA-Za-z]/g;
        this.userName = value.match(rex);
        console.log(this.userName);
    }
    validPhone(value) {
        let rex = /\d+/g;
        this.userPhone = value.match(rex);
        console.log(this.userPhone);
    }
    validEmail(value) {
        let rex = /[0-9]/g;
        this.userEmail = value.match(rex);
        console.log(this.userEmail);
    }
    
    addError(){
        let error = 'Поле заполнено не верно'
        if(this.userName === null){
            document.querySelector('.userName').classList.add('form_error');
            document.querySelector('.form_text_error').textContent = error;
        }else{
            document.querySelector('.userName').classList.remove('form_error');
            document.querySelector('.form_text_error').textContent = null;
        }
        if(this.userPhone === null){
            document.querySelector('.userPhone').classList.add('form_error');
            document.querySelector('.form_text_error').textContent = error;
        }else{
            document.querySelector('.userPhone').classList.remove('form_error');
            document.querySelector('.form_text_error').textContent = null;
        }if(this.userEmail === null){
            document.querySelector('.userEmail').classList.add('form_error');
            document.querySelector('.form_text_error').textContent = error;
        }else{
            document.querySelector('.userEmail').classList.remove('form_error');
            document.querySelector('.form_text_error').textContent = null;
        }
    }

    _init() {
        document.querySelector('.formBox').addEventListener('submit', e=> {
            e.preventDefault();
            this.validName(document.querySelector('.userName').value);
            this.validPhone(document.querySelector('.userPhone').value);
            this.validEmail(document.querySelector('.userEmail').value);

            this.addError();
        });
    }


}

const ctForm = new ContactForm();
