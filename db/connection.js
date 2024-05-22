const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({path : './config.env'})
mongoose.connect("mongodb+srv://jeeyavadgama:Jeeya2210@cluster0.r6i4s5r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(() => {console.log('Connection Successfull');}).catch((err) => {console.log(err);});
