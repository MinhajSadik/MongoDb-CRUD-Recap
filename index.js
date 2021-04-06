const express = require('express');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const password = 'MongoDB1';

const uri = "mongodb+srv://MinhajSadik:MongoDB1@cluster0.iojzl.mongodb.net/MongoDb-Recap?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (_req, res) => {
    res.sendFile(`${__dirname}/index.html`);
})

// const users = ['Anika', 'minhaj', 'sadik', 'hamida', 'sharmin', 'ikra', 'rumana', 'susmita', 'samiya'];

// app.get('/users/:id', (req, res) => {
//     const id = req.params.id;
//     const name = users[id]
//     // res.send(name);
//     res.send({ id, name });
//     // res.send(req.query.name)
// })

// app.post('/addUser', (req, res) => {
//     res.send(req.body)
// })

// app.get('/', (_req, res) => {
//     res.send("Thank You Guys For Coming>")
// })

client.connect(err => {
    const collection = client.db("MongoDb-Recap").collection("Product's");
    app.post('/addProduct', (req, res) => {
        const product = req.body;
        collection.insertOne(product)
            .then(result => {
                console.log('data added success')
                res.send('success')
        })
    })
});

app.listen(545, console.log('port on 545'))