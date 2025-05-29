const {
  getBooks,
  addBook,
  getSingleBook,
  updateBook,
  deleteBook,
  searchBook,
} = require("../controllers/bookController");

const router = require("express").Router();
const { multer, storage } = require("../middleware/multerConfig");
const upload = multer({ storage: storage });
router.route("/").get(getBooks).post(upload.single("bookImage"), addBook);
router
  .route("/:id")
  .get(getSingleBook)
  .patch(upload.single("bookImage"), updateBook)
  .delete(deleteBook);
router.get("/search", searchBook);

module.exports = router;
