import mongoose from 'mongoose';

const rentalSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    bookId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Book' },
    rentalPeriod: { type: String, enum: ['7_days', '1_month', 'lifetime'], required: true },
    rentalDate: { type: Date, default: Date.now },
    returnDate: { type: Date, required: true },
    status: { type: String, enum: ['ongoing', 'completed'], default: 'ongoing' },
}, { timestamps: true });

const Rental = mongoose.model('Rental', rentalSchema);

export default Rental;