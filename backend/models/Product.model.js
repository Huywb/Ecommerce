import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description : {type: String, required: true},
    price: {type: Number, required: true},
    newArrival: {type: Boolean, default: false},
    category: {type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true},
    stock : {type: Number, default: 0, min: 0},
    discount : {type: Number, default: 0, min: 0, max: 100},
    colors : {type: [String], required: true},
    images : {type: [String], required: true},
}, {timestamps: true});

const Product = mongoose.model("Product", productSchema) || mongoose.models.Product;

export default Product;