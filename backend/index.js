const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

//fill the require data
const postRouter = require('./router/postRouter');
const utilRouter = require('./router/util');

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
}));

//that is port to start express server

app.use('/post', postRouter);
app.use('/util', utilRouter);
app.use(express.static('./static/uploads'));
  

const port =process.env.PORT;

app.get('/', (req , res) => {
    res.send('Got Response From The Express Server')
});

app.get('/add', (req , res) => {
    res.send('Add Response From The Express Server')
});

app.listen( port, () => (console.log('Express Server Started Now')));