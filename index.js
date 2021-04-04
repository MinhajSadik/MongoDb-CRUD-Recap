import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('express node setup successfully')
})

app.listen(545, console.log('port on 545'))