import mongoose from "mongoose";

const bannerSchema = new mongoose.Schema(
    {
        image: {
            url: { type: String, default: '' },
            public_id: { type: String, default: '' },
        },
        active: { type: Boolean, default: false }
    },
    { timestamps: true }
);

const Banner = mongoose.model("Banner", bannerSchema) || mongoose.models.Banner;
export default Banner;