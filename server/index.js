//Require packages
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const controller = require('./controller.js');
const massive = require('massive');
require('dotenv').config();

//Controllers
const controller = require('./controller');


//express and bodyparser
const app = express();
app.use(bodyParser.json());

//massive 
let {
    CONNECTION_STRING
} = process.env;

massive(CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance);
    console.log('Connected!')
}).catch(error => {
    console.log('Db not connected:', error);
});



//endpoints
app.get('/api/inventory', controller.getAll);
app.post('api/product', controller.newProduct);
app.delete('/api/product/:id', controller.removeProduct);
app.get('api/product/:id', controller.getProduct);

//server running
app.listen(8000, () => {
    console.log('server is connected!');
});





