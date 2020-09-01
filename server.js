const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');



const app = express();

// Body Parser
app.use(bodyParser.json())

// DB config

const db = require('./config/keys').mongoURI;

// Connect to Mongo

mongoose
    .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB Connected...'))
    .catch((error) => console.log(error));

// use routes

app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on ${port}`))
