import express from 'express';

const app = express();
const fruit = {
    product: 'banana',
    price: '323'
}
const users = ['Anika', 'minhaj', 'sadik', 'hamida', 'sharmin', 'ikra', 'rumana', 'susmita', 'samiya'];

app.get('/user/:id', (req, res) => {

    const id = req.params.id;
    const name = users[id]
    res.send(name);
    })
app.get('/', (req, res) => {
    res.send(fruit)
})

app.listen(545, console.log('port on 545'))