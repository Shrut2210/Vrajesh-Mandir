const mongoose = require('mongoose')
const express = require('express')
const router = express.Router();
const Image = require('../Model/Image.js');

router.get('/', async (req, res) => {
    const allImage = await Image.find();
    return res.json(allImage);
})

router.get('/:id', async ( req, res) => {
    const oneImage = await Image.findById(req.params.id);
    return res.json(oneImage);
})

module.exports = router;