const express = require('express')
const cors = require('cors')
const fs = require('fs')
const app = express()


app.use(express.static('.'));
app.use(cors());
app.use(express.json())

app.get('/catalogData', (request, response) => {
    fs.readFile('./server/catalogData.json', 'utf-8', (err, data) => {
        if (err) {
            console.log('Error', err);
            response.status(500).json({message: 'Error'});
            return;
        }
        response.send(data)
    })

})
app.get('/basket', (request, response) => {
    fs.readFile('./server/basket.json', 'utf-8', (err, data) => {
        if (err) {
            console.log('Error', err);
            response.status(500).json({message: 'Error'});
            return;
        }
        response.send(data)
    })

})
app.post('/basket', (request, response) => {
    fs.readFile('./server/basket.json', 'utf-8', (err, data) => {
        if (err) {
            console.log('Error', err);
            response.status(500).json({message: 'Error'});
            return;
        }
        const cart = JSON.parse(data);
        let item = request.body.item;

        let itemInBasket = cart.find(basketItem => basketItem.id_product === item.id_product)

        if (!itemInBasket) {
            item.amount = 1;
            cart.push(item)
        } else {
            itemInBasket.amount++;
        }

        fs.writeFile('./server/basket.json', JSON.stringify(cart), (err) => {
            if (err) {
                return;
            }
            response.json({result: 1})
        });
        addHistory('add', item.id_product)
    })
})
app.delete('/basket/:id', (request, response) => {
    fs.readFile('./server/basket.json', 'utf-8', (err, data) => {
        if (err) {
            console.log('Error', err);
            response.status(500).json({message: 'Error'});
            return;
        }
        const cart = JSON.parse(data)
        let id = request.params.id;

        let itemInBasketIndex = cart.findIndex(basketItem => basketItem.id_product === +id)
        cart.splice(itemInBasketIndex, 1);

        addHistory('delete', id)

        fs.writeFile('./server/basket.json', JSON.stringify(cart), (err) => {
            if (err) {
                return;
            }
            response.json({result: 1})
        });
    })
})

app.listen(3000, () => {
    console.log('Server is running at localHost:3000');
})

function addHistory(method, id) {
    fs.readFile('./server/stat.json', 'utf-8', (err, data) => {
        if (err) {
            console.log('Error', err);
            return;
        }
        const history = JSON.parse(data);
        history.push({method, id});

        fs.writeFile('./server/stat.json', JSON.stringify(history), ()=>{});
    })
}