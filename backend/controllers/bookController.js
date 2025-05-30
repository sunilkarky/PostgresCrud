const { books } = require("../database/connection");
const fs = require("fs");
const BASE_URL = process.env.BASE_URL || "http://localhost:3000";
exports.getBooks = async (req, res) => {
  const bookData = await books.findAll();
  if (bookData.length === 0) {
    return res.status(404).json({
      message: "No books found",
      books: [],
    });
  }
  res.json({
    message: "Books fetched successfully",
    books: bookData,
  });
};

exports.getSingleBook = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    return res.status(400).json({
      message: "Book id is required",
    });
  }
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
  try {
    const { bookName, bookPrice, bookAuthor, bookGenre } = req.body;
    console.log(bookName);
    console.log(bookPrice);
    const file = req.file;
    console.log(file);
    if (!bookName || !bookPrice || !bookAuthor || !bookGenre) {
      return res.status(400).json({
        message: "bookName ,bookPrice ,bookAuthor ,bookGenre are required",
      });
    }
    if (!file) {
      return res.status(400).json({
        message: "Please attach bookImage",
      });
    }
    const book = await books.create({
      bookName,
      bookPrice,
      bookAuthor,
      bookGenre,

      bookImage: `${BASE_URL}/uploads/${file.filename}`,
      // "http://localhost:3000/" + file.filename,
    });
    res.json({
      message: "Book added successfully",
    });
  } catch (error) {
    console.error("Error adding book:", error);
  }
};

exports.updateBook = async (req, res) => {
  const { id } = req.params;
  const { bookName, bookPrice, bookAuthor, bookGenre } = req.body;
  if (!bookName || !bookPrice || !bookAuthor || !bookGenre) {
    return res.status(400).json({
      message:
        "Please fill all the fields: bookName, bookPrice, bookAuthor, bookGenre",
    });
  }
  const oldBook = await books.findByPk(id);
  if (!oldBook) {
    return res.status(404).json({
      message: "No data found of that id",
    });
  }
  const oldFilePath = oldBook.bookImage;
  const lengthToCut = "http://localhost:3000/".length;
  const actualFileName = oldFilePath.slice(lengthToCut);
  // If new image file is uploaded, delete previous file
  if (req.file && req.file.filename) {
    fs.unlink("./uploads/" + actualFileName, (err) => {
      if (err) {
        console.log("Error deleting file", err);
      } else {
        console.log("File deleted successfully");
      }
    });
  }
  const [_, updatedRows] = await books.update(
    {
      bookName: bookName,
      bookPrice: bookPrice,
      bookAuthor: bookAuthor,
      bookGenre: bookGenre,
      bookImage:
        req.file && req.file.filename
          ? `${BASE_URL}/${req.file.filename}`
          : oldFilePath,
    },
    {
      where: { id: id },
      returning: true,
    }
  );
  res.status(200).json({
    message: "Book updated successfully",
    data: updatedRows && updatedRows[0] ? updatedRows[0] : null,
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
  // Remove image file
  const oldFilePath = book.bookImage;
  const lengthToCut = `${BASE_URL}/`.length;
  const actualFileName = oldFilePath.slice(lengthToCut);
  fs.unlink("./uploads/" + actualFileName, (err) => {
    if (err) {
      console.log("Error deleting file", err);
    } else {
      console.log("File deleted successfully");
    }
  });

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
