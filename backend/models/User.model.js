import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email : {type: String, required: true, unique: true},
    password: {type: String, required: true},
    phone : {type: Number, default: ""},
    address : {type: String,default: ""},
    role : {type: String,enum: ["user", "admin"], default: "user"},
    status : {type: String,enum: ["active", "blocked"], default: "active"},
    avatar: {
        url: {type:String,default:''},
        public_id: {type: String, default: ''},
    }   
}, {timestamps: true});

const User = mongoose.model("User", userSchema) || mongoose.models.User;

export default User;