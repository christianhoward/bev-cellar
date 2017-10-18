const mongoose = require('mongoose');

const { Schema } = mongoose;

const bevsSchema = new Schema({
    name: String,
    type: String,
    year: { type: Number, default: Date },
    quantity: { type: Number, default: 1 },
    location: String,
    notes: String,
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
    createdOn: Date,
    lastUpdated: Date
});

mongoose.model('bevs', bevsSchema);