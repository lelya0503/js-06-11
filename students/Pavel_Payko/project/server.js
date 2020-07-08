const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors')
const { response } = require('express');
const { request } = require('http');


app.use(express.static('.'));
app.use(cors())
app.use(express.json())

const amountCheck = (item, cart) => {
    let toCheck = cart.findIndex(pos => {
        return item.id === pos.id;
    });
    if (toCheck != -1) {
        return true;
    } else {
        return false;
    }
}

app.get('/catalog', (request, response) => {
    fs.readFile('./catalog.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err)
            response.status(500).json({ message: 'ошибка!' })
            return
        }
        response.send(data)
    })
})

app.get('/cart', (request, response) => {
    fs.readFile('./cart.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err)
            response.status(500).json({ message: 'ошибка!' })
            return
        }
        response.send(data)
    })
})

app.post('/addToCart', (request, response) => {
    const item = request.body.item
    fs.readFile('./cart.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err)
            response.status(500).json({ message: 'ошибка!' })
            return
        }

        const cart = JSON.parse(data)

        const check = amountCheck(item, cart);
        console.log(check);
        if (check) {
            let i = cart.findIndex(pos => {
                return item.id === pos.id;
            });
            if (i != -1) {
                const toSplice = cart[i];
                toSplice.amount++;
                console.log(i);
                cart.splice(i, 1, toSplice);
            }
        } else if (!check) {
            item.amount = 1
            cart.push(item);
        } else {
            console.log("Something wrong");
        }

        fs.writeFile('./cart.json', JSON.stringify(cart), (err) => {
            if (err) {
                console.error(err)
                response.json({ result: 0 })
            }
            response.json({ result: 1 })
        })
    })
    toStats(item, 'добавлен товар')
})

app.post('/amountInc', (request, response) => {
    const item = request.body.item
    fs.readFile('./cart.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err)
            response.status(500).json({ message: 'ошибка!' })
            return
        }

        const cart = JSON.parse(data)

        let i = cart.findIndex(pos => {
            return item.id === pos.id;
        });
        cart[i].amount++

        fs.writeFile('./cart.json', JSON.stringify(cart), (err) => {
            if (err) {
                console.error(err)
                response.json({ result: 0 })
            }
            response.json({ result: 1 })
        })
    });
})

app.post('/amountDec', (request, response) => {
    const item = request.body.item
    fs.readFile('./cart.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err)
            response.status(500).json({ message: 'ошибка!' })
            return
        }

        const cart = JSON.parse(data)

        let i = cart.findIndex(pos => {
            return item.id === pos.id;
        });
        cart[i].amount--

        fs.writeFile('./cart.json', JSON.stringify(cart), (err) => {
            if (err) {
                console.error(err)
                response.json({ result: 0 })
            }
            response.json({ result: 1 })
        })
    });
})

app.delete('/removeFromCart', (request, response) => {
    const item = request.body.item
    console.log(request.body)
    fs.readFile('./cart.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err)
            response.status(500).json({ message: 'ошибка!' })
            return
        }
        const cart = JSON.parse(data)
        let toRemove = cart.findIndex(pos => {
            return item.product_name === pos.product_name;
        });
        if (toRemove != -1) {
            console.log(toRemove);
            cart.splice(toRemove, 1);
        }
        fs.writeFile('./cart.json', JSON.stringify(cart), (err) => {
            if (err) {
                console.error(err)
                response.json({ result: 0 })
            }
            response.json({ result: 1 })
        })
    })
    toStats(item, 'удален товар')
})

const toStats = function (item, msg) {
    fs.readFile('./stats.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err)
            response.status(500).json({ message: 'ошибка!' })
            return
        }
        const toWrite = JSON.parse(data);
        toWrite.push({
            date: new Date().toLocaleString(),
            message: msg,
            title: item.product_name
        })
        fs.writeFile('./stats.json', JSON.stringify(toWrite), (err) => {
            if (err) {
                console.error(err)
            }
        })
    })
}

app.listen(3000, () => {
    console.log('server is running at localhost:3000')
});