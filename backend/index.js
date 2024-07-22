const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

const postRouter = require('./router/postRouter');
const utilRouter = require('./router/util');

// Add this code to allow requests from both origins
app.use(express.json());
app.use(cors({origin: '*'}));


app.use(express.json());

app.use('/post', postRouter);
app.use('/util', utilRouter);

app.use(express.static('./static/uploads'));

const port =5000;

app.get('/', (req, res) => {
  res.send('Got Response From The Express Server');
});

app.get('/add', (req, res) => {
  res.send('Add Response From The Express Server');
});

app.listen(port, () => console.log('Express Server Started Now'));
