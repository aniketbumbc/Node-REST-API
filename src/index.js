const express = require("express");
const mongoose = require("mongoose");
const bookRoute = require("../routes/books");

mongoose
  .connect("mongodb://localhost:27017/express-mongodb", {
    useNewUrlParser: true,
  })
  .then(() => {
    const app = express();
    app.use(express.json());

    app.get("/books", bookRoute.findBooks);
    app.post("/books",bookRoute.createBook);
    app.get("/books/:id",bookRoute.findSingleBook);

    app.listen(8000, () => {
      console.log("Server started port 8000");
    });
  })
  .catch((err) => {
    console.log("Data base connection fail :", err);
  });
