import mongoose, { Schema } from 'mongoose'

// Create the post model for mongoose
const postSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    posted: { type: Date, default: Date.now, required: true },
    user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    content: { type: String, required: true }
});

export default mongoose.model('Post', postSchema)