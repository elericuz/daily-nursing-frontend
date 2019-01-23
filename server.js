// server.js

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();

//  Serve static files
app.use(express.static('public'));

// Routing
router.get('/api', (request, response) => {
    response.status(200).send({message: 'Hello World!'})
});

//Set app to use express backend router
app.use(router);

// Configure port
const port = 8080;

// Listen to port
app.listen(port);

console.log(`Server is running on port: ${port}`);
