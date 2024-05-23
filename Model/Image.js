const express = require('express');
const mongoose = require('mongoose');

const ImageSchema = mongoose.Schema({
    title : {
        type : String,
        require : true
    },
    logo : {
        type : String,
        require : true
    },
    innerPhotos : {
        type : Array,
        require : true
    },
})

const Image = mongoose.model('Image', ImageSchema);

module.exports = Image;