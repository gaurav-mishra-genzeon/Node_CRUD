const express = require("express");
const { getBook, getBookById, addBook, updateBook, deleteBook, getBookByQuery } = require("../controller/bookController");
const router = express.Router();

router.get("/", getBook);  //get all books

router.get("/:id", getBookById); //get book by id

router.get("/search/:query",getBookByQuery)  //get book by author or category

router.post("/",addBook ); // add a book(prevents duplicate)

router.put("/:id", updateBook);   //update a book

router.delete("/:id",deleteBook);    //delete a book

module.exports = router;
