const Book = require("../models/Book");

exports.findBooks = async (req, res) => {
  const books = await Book.find();
  res.send({ data: books });
};

exports.createBook = async (req, res) => {
  const book = new Book(req.body);
  await book.save();
  res.send({ data: book });
};
