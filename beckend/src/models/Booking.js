const mongoose = requrie('mongoose');

const BookingSchema = new mongoose.Schema({
    date: String,
    approved: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectedId,
        ref: 'User'
    },
    spot: {
        type: mongoose.Schema.Types.ObjectedId,
        ref: 'Spot'
    }
});

module.exports = mongoose.model('Booking', BookingSchema);
