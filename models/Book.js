// models/Book.js

const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  author: String,
  bookName: String,
  serialNumber: Number,
});

module.exports = mongoose.model('Book', bookSchema);
