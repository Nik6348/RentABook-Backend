import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true, lowercase: true },
    role: { type: String, enum: ['USER', 'ADMIN'], default: 'USER' },
    rentalHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Rental' }],
}, {
    timestamps: true,
});


const User = mongoose.model('User', userSchema);

export default User;