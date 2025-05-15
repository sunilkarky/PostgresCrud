const {
  getBooks,
  addBook,
  getSingleBook,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");

const router = require("express").Router();

router.route("/").get(getBooks).post(addBook);
router.route("/:id").get(getSingleBook).patch(updateBook).delete(deleteBook);

module.exports = router;
