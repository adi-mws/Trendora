const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  name: { type: String, required: true },
  addressLine1: { type: String, required: true },
  addressLine2: { type: String },
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  zipcode: { type: String, required: true },
  phone: { type: String, required: true },
  default: { type: Boolean, default: false },
});

module.exports = mongoose.model('Address', addressSchema);
