const { books } = require("../database/connection");

exports.getBooks = async (req, res) => {
  const bookData = await books.findAll();
  if (bookData.length === 0) {
    return res.status(404).json({
      message: "No books found",
    });
  }
  res.json({
    message: "Books fetched successfully",
    books: bookData,
  });
};

exports.getSingleBook = async (req, res) => {
  const id = req.params.id;
  const book = await books.findByPk(id);
  if (!book) {
    return res.status(404).json({
      message: "Book not found",
    });
  }
  res.json({
    message: "Book fetched successfully",
    book,
  });
};

exports.addBook = async (req, res) => {
  const { bookName, bookPrice, bookAuthor, bookGenre } = req.body;
  if (!bookName || !bookPrice || !bookAuthor || !bookGenre) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }
  const book = await books.create({
    bookName,
    bookPrice,
    bookAuthor,
    bookGenre,
  });
  res.json({
    message: "Book added successfully",
  });
};
exports.updateBook = async (req, res) => {
  const id = req.params.id;
  const book = await books.findByPk(id);
  if (!book) {
    return res.status(404).json({
      message: "Book not found",
    });
  }
  const { bookName, bookPrice, bookAuthor, bookGenre } = req.body;
  if (!bookName || !bookPrice || !bookAuthor || !bookGenre) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }
  await books.update(
    {
      bookName,
      bookPrice,
      bookAuthor,
      bookGenre,
    },
    {
      where: {
        id: id,
      },
    }
  );
  res.json({
    message: "Book updated successfully",
  });
};
exports.deleteBook = async (req, res) => {
  const id = req.params.id;
  const book = await books.findByPk(id);
  if (!book) {
    return res.status(404).json({
      message: "Book not found",
    });
  }
  await books.destroy({
    where: {
      id: id,
    },
  });
  res.json({
    message: "Book deleted successfully",
  });
};
exports.searchBook = async (req, res) => {
  const { bookName } = req.query;
  if (!bookName) {
    return res.status(400).json({
      message: "Book name is required",
    });
  }
  const book = await books.findAll({
    where: {
      bookName: {
        [Op.like]: `%${bookName}%`,
      },
    },
  });
  if (book.length === 0) {
    return res.status(404).json({
      message: "Book not found",
    });
  }
  res.json({
    message: "Book fetched successfully",
    book,
  });
};
