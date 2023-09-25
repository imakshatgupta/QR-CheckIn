import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    // Define a custom validator function for email validation
    validate: {
      validator: function (value) {
        // Use a regular expression to check if the email ends with @iiitu.ac.in
        return /@iiitu\.ac\.in$/.test(value);
      },
      message: 'Enter your institute email address!',
    },
  },
  name: {
    type: String,
    required: [true, "Name is required!"],
  },
  rollno: {
    type: String,
    required: [true, "Roll Number is required!"],
  },
  hostel: {
    type: String,
    required: [true, "Hostel is required!"],
  },
  roomno: {
    type: String,
    required: [true, "Room Number is required!"],
  },
  mobile: {
    type: String,
    required: [true, "Mobile Number is required!"],
  },
});


const User = models.User || model("User",UserSchema);

export default User; 