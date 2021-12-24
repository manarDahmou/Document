const mongoose = require('mongoose');

const documentSchema = mongoose.Schema({
    fullName: String,
    description: String,
    date: Date,
    doc: String,
});

const document = mongoose.model('Document' , documentSchema);

module.exports = document ; 