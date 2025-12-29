import mongoose from "mongoose";

const bannerSchema = new mongoose.Schema(
    {
        imageUrl: { type: [String], required: true },
    },
    { timestamps: true }
);

const Banner = mongoose.model("Banner", bannerSchema) || mongoose.models.Banner;
export default Banner;