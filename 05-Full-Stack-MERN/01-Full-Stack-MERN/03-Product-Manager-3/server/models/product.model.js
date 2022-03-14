const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String },
    price: {
        type: Number },
    description: {
        type: String }
//"timestamps" adds updated at and created at when set to true
}, { timestamps: true });

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
