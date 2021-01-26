const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const restrictOrigin = require('./middlewares/restrictOrigin');
require('dotenv').config();

// Call express
const app = express();

// Mongoose
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Database connection success!')
    })
    .catch((err) => {
        console.log('Mongo Connection Error', err);
    });

// Declare port number to be used
const PORT = process.env.port || 3000;

// Allows use of request body as req.body
app.use(express.json());
app.use(restrictOrigin);

// Enable incoming request logging in dev mode
app.use(morgan('dev'));

app.get('/ping', (req, res) => {  // Define the endpoint
    return res.send({
        status: 'Healthy',
    });
})

app.listen(PORT, () => console.log('==> Listening on port %s. Visit http://localhost:%s/ in your browser.', PORT, PORT));
