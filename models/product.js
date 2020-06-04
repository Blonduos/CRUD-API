const mongoose = require('mongoose');
const Joi = require('joi');

const Product = mongoose.model(
  'Product',
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50,
    },
    price: {
      type: Number,
      required: true,
    },
    available: { type: Boolean, required: true },
    dateCreated: { type: Date, default: Date.now },
  })
);

function validateProduct(product) {
  const schema = {
    name: Joi.string().min(3).max(50).required(),
    price: Joi.number().required(),
    available: Joi.boolean().required(),
  };

  return Joi.validate(product, schema);
}

exports.Product = Product;
exports.validate = validateProduct;
