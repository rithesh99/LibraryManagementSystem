var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var bookSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 32,
      trim: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publisher: {
      type: String,
      required: true,
    },
    lend: {
      type: Object,
      required: true,
      default: {},
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
