const mongoose = require('mongoose');
const express = require('express');
const products = require('./routes/products');
const app = express();

mongoose
  .connect('mongodb://localhost/blonduos')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDb', err));

app.use(express.json());
app.use('/api/products', products);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
