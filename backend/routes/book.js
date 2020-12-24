const express = require("express");
const router = express.Router();


const {getBookById, createBook, getBook, deleteBook, updateBook, getAllBook,updateLendBook} = require("../controllers/book");
const {isAdmin} = require("../controllers/auth");
const {getUserById} = require("../controllers/user");

//ALL OF PARAMS
router.param("userId", getUserById);
router.param("bookId", getBookById);


//NOTE CREATE
router.post("/book/create/:userId", isAdmin, createBook);

//NOTE READ
router.get("/books", getAllBook)
router.get("/book/:bookId", getBook);

//NOTE UPDATE
router.put("/book/:bookId/:userId",isAdmin,updateBook); 
router.put("/books/:bookId/:userId",updateLendBook); 

//NOTE DELETE 
router.delete("/book/:bookId/:userId", isAdmin,deleteBook);

module.exports = router;