import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    author: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    price: {
        weekly: { type: Number, required: true },
        monthly: { type: Number, required: true },
        lifetime: { type: Number, required: true },
    },
    ratings: [{ userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, rating: { type: Number, required: true } }],
    reviews: [{ userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, review: { type: String, required: true } }],
}, { timestamps: true });

const Book = mongoose.model('Book', bookSchema);

export default Book;