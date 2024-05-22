const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({path : './config.env'})
mongoose.connect("mongodb://127.0.0.1:27017/Vrajesh").then(() => {console.log('Connection Successfull');}).catch((err) => {console.log(err);});
