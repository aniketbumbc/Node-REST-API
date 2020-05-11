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

exports.findSingleBook = async (req,res) =>{
    const book = await Book.findById(req.params.id);
    res.send({data:book});
}
