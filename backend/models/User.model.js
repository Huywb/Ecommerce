import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email : {type: String, required: true, unique: true},
    password: {type: String, required: true},
    phone : {type: String, required: true, default: ""},
    address : {type: String, required: true, default: ""},
    role : {type: String,enum: ["user", "admin"], default: "user"},
    status : {type: String,enum: ["active", "blocked"], default: "active"},
}, {timestamps: true});

const User = mongoose.model("User", userSchema) || mongoose.models.User;

export default User;