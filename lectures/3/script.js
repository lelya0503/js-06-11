
// reduce
// const foo = [{ price: 100 }, { price: 200 }, { price: 300 }].reduce((acc, value) => acc + value.price, 0);


// global event listener 
// document.querySelector('.goods-list').addEventListener('click', (event) => {
//     console.log('.goods-list click');
//     if (event.target.name === 'add-to-cart') {
//         console.log(event.target.parentElement.dataset.title);
//         console.log(event.target.parentElement.dataset.price);
//     }
// });


// JSON
// const arr = [
//     { title: 'Компьютер', price: 10000 },
//     { title: 'Мышь', price: 500 },
// ];
// const json = JSON.stringify(arr);
// console.log(json);
// const jsonString = '[{"title":"Компьютер","price":10000},{"title":"Мышь","price":500}]';
// const arrFromJson = JSON.parse(jsonString);
// console.log(arrFromJson);

// async
// let a = 1;
// setTimeout(() => {
//     a++;
//     console.log('timeout', a);
// }, 0);
// console.log('main', a);


// callback
// let a = 0;

// function asyncIncrement(x, callback) {
//     setTimeout(() => {
//         a += x;
//         callback(a);
//     }, 1000);
// }

// function processResult(result, callback) {
//     setTimeout(() => {
//         callback([result]);
//     }, 1000);
// }

// asyncIncrement(10, (data) => {
//     console.log('asyncIncrement callback', data);
//     processResult(data, (result) => {
//         console.log('processResult callback', result);
//     });
// });


// promise
// 3 состояния:
//  - ожидание (pending)
//  - успешно выполнено (fulfilled)
//  - с ошибкой выполнено (rejected)

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('foo');
//         reject('bar');
//     }, 1000);
// });

// promise
//     .then((data) => {
//         console.log('Promise fulfilled: ', data);
//     })
//     .catch((error) => {
//         console.log('Promise rejected: ', error);
//     });


// let a = 0;

// function asyncIncrement(x) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             a += x;
//             if (everythingIsOkay) {
//                 resolve(a);
//             } else {
//                 reject('error');
//             }
//         }, 1000);
//     })
// }

// function processResult(result) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject([result]);
//         }, 1000);
//     });
// }

// const promise = asyncIncrement(10)
//     .then(
//         (data) => {
//             console.log('asyncIncrement promise resolve', data);
//             return processResult(data);
//         }, 
//         (error) => {
//             console.log('asyncIncrement promise reject', error);
//         }
//     )
//     .then((result) => {
//         console.log('processResult promise resolve', result);
//     })
//     .catch((error) => {
//         console.log('Promise rejected', error);
//     });

// XMLHTTPRequest
const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const xhr = new XMLHttpRequest();

xhr.timeout === 0;

xhr.ontimeout = () => {
    console.log('on time out');
}

xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            console.log('Success', JSON.parse(xhr.responseText));
        } else {
            console.log('Error:', xhr.responseText);
        }
    }
};

xhr.setRequestHeader('Content-Type', 'application/json');

xhr.open('GET', `${API}/catalogData.json`, true);

xhr.send();
