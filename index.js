const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({path : './.env'});
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({extended : false}));
app.use(bodyparser.json());

require('./db/connection.js');

const User = require('./Routes/UserRoute.js');
app.use('/user', User);

app.listen(7000, () => {
    console.log('PORT running');
})