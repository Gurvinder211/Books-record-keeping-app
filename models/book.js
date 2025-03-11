// models/Book.js
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title:  { type: String, required: true },
  author: { type: String, required: true },
  status: { 
    type: String, 
    enum: ['read', 'to-read'], 
    default: 'to-read' 
  },
  user:   { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema);
