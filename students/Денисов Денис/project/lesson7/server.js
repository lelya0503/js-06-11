const express = require('express');
const app = express();
const cors = require('cors');
const actionDataArr = []

const fs = require('fs');

app.use(express.static('.'));

app.use(cors());

app.use(express.json());

app.get('/catalog', (request, response) => {
    fs.readFile('./catalog.json', 'utf-8', (err, data) => {
        if (err) {
            console.log('Error!', err);
            response.status(500).json({ message: 'Ошибка!' });
            return;
        }
        response.send(data);
    });
});

app.get('/cart', (request, response) => {
    fs.readFile('./cart.json', 'utf-8', (err, data) => {
        if (err) {
            console.log('Error!', err);
            response.status(500).json({ message: 'Ошибка!' });
            return;
        }
        response.send(data);
    });
});


app.post('/addToCart', (request, response) => {
    fs.readFile('./cart.json', 'utf-8', (err, data) => {
        if (err) {
            console.log('Error!', err);
            response.json({ result: 0 });
            return;
        }
        const cart = JSON.parse(data);
        if (request.body.item.quantity == 0) {
            request.body.item.quantity++;
            cart.push(request.body.item);
            fs.writeFile('./cart.json', JSON.stringify(cart), (err) => {
                if (err) {
                    response.json({ result: 0 });
                    return;
                }
                response.json({ result: 1 });
            });
        } else {
            const index = cart.findIndex(elem => {
                return elem.id_product == request.body.item.id_product
            })
            cart[index].quantity++;

            fs.writeFile('./cart.json', JSON.stringify(cart), (err) => {
                if (err) {
                    response.json({ result: 0 });
                    return;
                }
                response.json({ result: 1 });
            });
        }
        const date = new Date()
        const actionDataObj = {
            product_name: request.body.item.product_name,
            action: "Товар добавлен",
            time: `В ${date.getHours()} часов ${date.getMinutes()} минут`
        }
        actionDataArr.push(actionDataObj)
        console.log(actionDataArr)
        fs.writeFileSync('./static.json', JSON.stringify(actionDataArr))
    })
});

app.post('/removeToCart', (request, response) => {
    fs.readFile('./cart.json', 'utf-8', (err, data) => {
        if (err) {
            console.log('Error!', err);
            response.json({ result: 0 });
            return;
        }
        const cart = JSON.parse(data);
        const index = cart.findIndex(elem => {
            request.body.item.id_product === elem.id_product
        });
        cart.splice(index, 1)

        fs.writeFile('./cart.json', JSON.stringify(cart), (err) => {
            if (err) {
                response.json({ result: 0 });
                return;
            }
            response.json({ result: 1 });
        });
        const date = new Date()
        const actionDataObj = {
            product_name: request.body.item.product_name,
            action: "Товар удален",
            time: `В ${date.getHours()} часов ${date.getMinutes()} минут`
        }
        actionDataArr.push(actionDataObj)
        console.log(actionDataArr)
        fs.writeFileSync('./static.json', JSON.stringify(actionDataArr))
    });
});

app.listen(3000, () => {
    console.log('Server is running at localhost:3000');
});