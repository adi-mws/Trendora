import mongoose from 'mongoose'

const reviewSchema = new mongoose.Schema({
  image: [String],
  message: String,
  rating: String,
});

const productSchema = new mongoose.Schema({
  name: String,
  image: String,
  amount: Number,
  quantity: Number,
  review: reviewSchema,
});

const shippingAddressSchema = new mongoose.Schema({
  name: String,
  addressLine1: String,
  addressLine2: String,
  city: String,
  state: String,
  country: String,
  zipcode: String,
  phone: String,
  default: Boolean,
});

const orderSchema = new mongoose.Schema({
  createdAt: {
    type: String,
    default: () => new Date().toISOString(),
  },
  products: [productSchema],
  shippingAddress: shippingAddressSchema,
  paymentMode: {
    type: String,
    enum: ['online', 'cash on delivery'],
    default: 'online',
  },
  totalAmount: Number,
  paymentStatus: {
    type: String,
    enum: ['paid', 'pending'],
    default: 'pending',
  },
  status: {
    type: String,
    enum: ['processing', 'shipped', 'delivered'],
    default: 'processing',
  },
  doraCoinsEarned: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model('Order', orderSchema);
