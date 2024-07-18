const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

// Import routers
const postRouter = require('./router/postRouter');
const utilRouter = require('./router/util');

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'https://assignment-five-snowy.vercel.app',
}));

// Serve static files (uploaded images)
app.use('/static/uploads', express.static('./static/uploads'));

// Routes
app.use('/post', postRouter);
app.use('/util', utilRouter);

// Routes for testing
app.get('/', (req, res) => {
  res.send('Got Response From The Express Server');
});

app.get('/add', (req, res) => {
  res.send('Add Response From The Express Server');
});

// Error handling middleware (example)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const port = 5000; 

app.listen(port, () => {
  console.log(`Express server is running on port ${port}`);
});
