import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        orderCode : { type: String, required: true, unique: true },   
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },  
        products: [
            {
                productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
                quantity: { type: Number, required: true, default: 1 },
            }
        ],
        total: { type: Number, required: true },
        paymentMethod: { type: String,enum: ["cod", "vnpay", "momo", "paypal"], required: true },
        shippingStatus: { type: String,enum: ["processing", "shipping", "delivered", "cancelled"], default: "processing" },
        paymentStatus: { type: String, enum: ["pending", "paid", "failed"], default: "pending" },
    },
    { timestamps: true }
);
const Order = mongoose.model("Order", orderSchema) || mongoose.models.Order;
export default Order;