const express = require('express');
const app = express();
const cors = require('cors');

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

        const item = cart.find(({ id_product }) => id_product === request.body.item.id_product);
        if (item !== undefined) {
            item.quantity += 1;
        } else {
            cart.push({ ...request.body.item, quantity: 1 });
        }

        log('add', request.body.item.product_name);
        
        fs.writeFile('./cart.json', JSON.stringify(cart), (err) => {
            if (err) {
                response.json({ result: 0 });
                return;
            }

            response.json({ result: 1 });
        });
    });
});

app.delete('/removeFromCart', (request, response) => {
    fs.readFile('./cart.json', 'utf-8', (err, data) => {
        if (err) {
            console.log('Error!', err);
            response.json({ result: 0 });
            return;
        }

        const cart = JSON.parse(data);
        
        const index = cart.findIndex(({ id_product }) => id_product === request.body.id);
        if (index !== -1) {
            log('remove', cart[index].product_name);
            cart.splice(index, 1);
        }
        
        fs.writeFile('./cart.json', JSON.stringify(cart), (err) => {
            if (err) {
                response.json({ result: 0 });
                return;
            }

            response.json({ result: 1 });
        });
    });
});

function log(action, itemName) {
    fs.readFile('./stats.json', 'utf-8', (err, data) => {
        if (err) {
            console.log('Error! Can\'t read file stats.json ', err);
            return;
        }

        const stats = JSON.parse(data);
        stats.push({
            action,
            itemName,
            timestamp: Date.now(),
        });
        
        fs.writeFile('./stats.json', JSON.stringify(stats), (err) => {
            if (err) {
                console.log('Error! Can\'t write to file stats.json', err);
                return;
            }
        });
    });
}

app.listen(3000, () => {
    console.log('Server is running at localhost:3000');
});
