import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    newArrival: { type: Boolean, default: false },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
    discount: { type: Number, default: 0, min: 0, max: 100 },
    sizes: { type: [String], required: true },
    variants: [{
        color: { type: String, required: true },
        image: [{
            url: { type: String, default: '' },
            public_id: { type: String, default: '' },
        }],
        stock: {type: Number, default:0}
    },]
}, { timestamps: true });

const Product = mongoose.model("Product", productSchema) || mongoose.models.Product;

export default Product;