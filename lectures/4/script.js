// async await

// const promise = () => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('foo');
//         // reject('bar');
//     }, 1000);
// });

// promise()
//     .then((data) => {
//         console.log('Promise fulfilled: ', data);
//     })
//     .catch((error) => {
//         console.log('Promise rejected: ', error);
//     });

// (async () => {
//     try {
//         const data = await promise();
//         console.log('Promise fulfilled: ', data);
//     } catch (error) {
//         console.log('Promise rejected: ', error);
//     }
// })();

let a = 0;

function asyncIncrement(x) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            a += x;
            if (true) {
                resolve(a);
            } else {
                reject('error');
            }
        }, 1000);
    })
}

function processResult(result) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject([result]);
        }, 1000);
    });
}

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

// (async () => {
//     try {
//         const data = await asyncIncrement(10);
//         console.log('asyncIncrement promise resolve', data);
//         const result = await processResult(data);
//         console.log('processResult promise resolve', result);
//     } catch (error) {
//         console.log('Promise rejected', error);
//     }
// })();

// function promise1(result) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('result 1');
//         }, 1000);
//     });
// }

// function promise2(result) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('result 2');
//         }, 100);
//     });
// }

// function promise3(result) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('result 3');
//         }, 200);
//     });
// }

// (async () => {
//     try {
//         // const res1 = await promise1();
//         // const res2 = await promise2();
//         // const res3 = await promise3();
        
//         const [res1, res2, res3] = await Promise.all([promise1(), promise2(), promise3()]);
//         console.log(res1, res2, res3);
//     } catch (err) {
//         console.log('Error!', err);
//     }
// })();


// fetch
const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const sendRequest = async () => {
    const response = await fetch(`${API}/catalogData.json`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ someKey: 'someValue' }),
    });
    const data = await response.json();
    console.log(data);
};

sendRequest();
