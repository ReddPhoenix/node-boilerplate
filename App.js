const express = require('express');
const morgan = require('morgan');

// Call express
const app = express();

// Declare port number to be used
const PORT = process.env.port || 3000;

// Allows use of request body as req.body
app.use(express.json());

// Enable incoming request logging in dev mode
app.use(morgan('dev'));

app.get('/ping', (req, res) => {  // Define the endpoint
    return res.send({
        status: 'Healthy',
    });
})

app.listen(PORT, () => console.log('==> Listening on port %s. Visit http://localhost:%s/ in your browser.', PORT, PORT));
