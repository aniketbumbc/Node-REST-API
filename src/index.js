const express = require("express");
const mongoose = require("mongoose");
const bookRoute = require("../routes/books");

mongoose
  .connect("mongodb://localhost:27017/express-mongodb", {
    useNewUrlParser: true,
  })
  .then(() => {
    const app = express();
    app.get("/books", bookRoute.findBooks);

    app.listen(8000, () => {
      console.log("Server started port 8000");
    });
  })
  .catch((err) => {
    console.log("Data base connection fail :", err);
  });
