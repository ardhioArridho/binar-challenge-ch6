const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    guest : {
        type : String,
        required : [true, 'Fill with the guest full name...']
    },
    roomtype : {
        type : String,
        required : [true, 'Guest room type']
    },
    duration : {
        type : Number,
        required : [true, 'How many days of stay?'],
    },
    // bills : {
    //     type : Schema.Types.ObjectID,
    //     ref : "Bills"
    // }
});

module.exports = mongoose.model('Bookings', bookingSchema)