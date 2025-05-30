const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  image: [String],
  message: String,
  rating: String,
});

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  images: { type: [String], required: true },
  mrp: { type: Number, required: true },
  price: { type: Number, required: true },
  discount: { type: Number, default: 0 }, // e.g. 15 means 15% off
  quantity: { type: Number, required: true, default: 1 },
  review: reviewSchema,
});

module.exports = mongoose.model('Product', productSchema);
