//import all dependencies whatever we are using 

const express = require('express');
const router = require('./router/index')
const session = require('./middleware/session');
//create an application

const app = express();


app.use(session);


app.use(router)

app.listen(4000, () => console.log('server is running on port 4000'));

