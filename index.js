import express from 'express';

const app = express();
const fruit = {
    product: 'banana',
    price: '323'
}
app.get('/', (req, res) => {
    res.send(fruit)
})

app.listen(545, console.log('port on 545'))