import express from 'express';
import cors from 'cors';
import MongoClient from 'mongodb';

const password = 'MongoDB1';

const uri = "mongodb+srv://MinhajSadik:MongoDB1@cluster0.iojzl.mongodb.net/MongoDb-Recap?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
app.use(cors());
app.use(express.json())



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

app.get('/', (req, res) => {
    res.send("Thank You Guys For Coming>")
})

client.connect(err => {
    const collection = client.db("MongoDb-Recap").collection("Project's");
    app.get('/', (req, res) => {
        collection.InsertOne({

        })
    })
});

app.listen(545, console.log('port on 545'))