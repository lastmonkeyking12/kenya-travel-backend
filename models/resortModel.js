const mongoose = require('mongoose');

const resortSchema = new mongoose.Schema({
  name: String,
  location: String,
  services: [String],
  price: Number,
  images: [String],
  bookingUrl: String,
  clickCount: { type: Number, default: 0 }
});

module.exports = mongoose.model('Resort', resortSchema);
