import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
   
    email: {
        type: String,
        required: [true, "Please provide a email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    },
    
})

const Guard = mongoose.models.guard || mongoose.model("guard", userSchema);

export default Guard;