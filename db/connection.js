const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({path : './config.env'})
mongoose.connect(process.env.URL).then(() => {console.log('Connection Successfull');}).catch((err) => {console.log(err);});
