import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

const fruit = {
    product: 'banana',
    price: '323'
}
const users = ['Anika', 'minhaj', 'sadik', 'hamida', 'sharmin', 'ikra', 'rumana', 'susmita', 'samiya'];

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const name = users[id]
    // res.send(name);
    res.send({ id, name });
    // res.send(req.query.name)
})
    

// app.get('/', (req, res) => {
//     res.sendFile(`${__dirname}/index.html`);
// })
app.get('/', (req, res) => {
    res.send(fruit)
})

app.listen(545, console.log('port on 545'))