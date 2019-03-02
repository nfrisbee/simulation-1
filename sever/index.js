const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express();
const controller = require('./controller.js');


// endpoints
app.get('/', (req,res)=> {
    res.send();
});

//server running
app.listen(8000, () => {console.log('server is connected!')
});





