// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Book = require('./models/Book'); // Import the Book model

const app = express();
const port = process.env.PORT || 4000;
mongoose.connect('mongodb+srv://1234:1234@cluster0.lg0pj4y.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Create a new book
app.post('/api/books', async (req, res) => {
  try {
    const { author, bookName, serialNumber } = req.body;
    const book = new Book({ author, bookName, serialNumber });
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all books
app.get('/api/books', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a specific book by ID
app.get('/api/books/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a book by ID
app.put('/api/books/:id', async (req, res) => {
  try {
    const { author, bookName, serialNumber } = req.body;
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      { author, bookName, serialNumber },
      { new: true }
    );
    res.json(updatedBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a book by ID
app.delete('/api/books/:id', async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    res.json(deletedBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
