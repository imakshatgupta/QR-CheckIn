import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a name"],
    },
    email: {
        type: String,
        required: [true, "Please provide a email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    },
    rollno: {
        type: String,
        // required: [true, "Please provide a rollno"],
    },
    roomno: {
        type: String,
        // required: [true, "Please provide a roomno"],
    },
    hostel: {
        type: String,
        // required: [true, "Please provide a hostel"],
    },
    phone: {
        type: String,
        // required: [true, "Please provide a phone"],
    },
    isOutside: {
        type: Boolean,
        default: false,
    },
})

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;