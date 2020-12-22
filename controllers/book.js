const Book = require("../models/book");

//NOTE CREATE
exports.createBook = (req, res) => {
  const { title, imageUrl, tags, postedBy } = req.body;

  const book = new Book(req.body);
  book.save((err, book) => {
    if (err) {
      return res.status(400).json({
        err: "NOT able to save book in DB",
      });
    }
    res.json({
      _id: book._id,
      title: book.title,
      imageUrl: book.imageUrl,
      postedBy: book.postedBy,
    });
  });
};

//NOTE READ
exports.getBookById = (req, res, next, id) => {
    Book.findById(id).exec((err, book) => {
      if (err) {
        return res.status(400).json({
          error: "PRODUCT NOT FOUND",
        });
      }
      req.book = book;
      // console.log("Book by id",book);
      next();
    });
  };

exports.getBook = (req, res) => {
  return res.json(req.book);
};


exports.getAllBook = (req, res) => {
    Book.find()
      .exec((err, posts) => {
        if (err) {
          return res.status(400).json({
            error: "NO posts FOUND",
          });
        }
        res.json(posts);
      });
  };
  

//NOTE UPDATE 
exports.updateBook = (req, res) => {
    Book.findByIdAndUpdate(
      { _id: req.book._id },
      { $set: req.body },
      { new: true, useFindAndModify: false },
      (err, book) => {
        if (err) {
          return res.status(400).json({
            error: "YOU ARE NOT AUTHORIZED TO UPDATE THIS USER",
          });
        }
  
        res.json(book);
      }
    );
  };
  
  
//NOTE DELETE
exports.deleteBook = (req, res) => { 
  let book = req.book;
  // console.log("Book...",book);
  book.remove((err, book) => {
    if (err) {
      return res.status(400).json({
        error: "FAILED TO DELTE THE PRODUCT",
      });
    }
    res.json({
      message: "DELETION WAS SUCCESS",
      book,
    });
  });
};





