const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Booking = require('../models/booking')
const Bills = require('../models/bills')

// GET QUERIES (1) BUAT HOMEPAGE (2) BUAT DASHBOARD DATA (3) BUAT FORM CREATE

// (1) HOMEPAGE
app.get('/', (req,res) => {
    res.send('ACCESSING HOME PAGE')
    console.log('>>>>>>>> ACCESSING HOME PAGE >>>>>>>>>')
})

module.exports = 'routes'