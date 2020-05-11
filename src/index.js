const express = require("express");
const mongoose = require("mongoose");
const Book = require("../models/Book");

mongoose
  .connect("mongodb://localhost:27017/express-mongodb", {
    useNewUrlParser: true,
  })
  .then(() => {
    const app = express();
    app.get("/books", async (req, res) => {
      const books = await Book.find();
      res.send({ data: books });
    });

    app.listen(8000, () => {
      console.log("Server started port 8000");
    });
  })
  .catch((err) => {
    console.log("Data base connection fail :", err);
  });
