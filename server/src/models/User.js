import mongoose from "mongoose";

// Create the user model for mongoose
const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email: {
    type: String,
    required: true,
    createIndexes: true
  },
  password: { type: String, required: true },
  username: { type: String, required: true }
});

export default mongoose.model("User", userSchema);
