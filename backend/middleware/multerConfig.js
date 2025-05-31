const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    //image format checker
    const acceptedFileFormat = ["image/jpg", "image/png", "image/jpeg"];
    if (!acceptedFileFormat.includes(file.mimetype)) {
      cb(new Error("Invalid file format only support png , jpg , jpeg"), false);
      return;
    }
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// Custom error handler middleware for multer
function multerErrorHandler(err, req, res, next) {
  if (
    err instanceof multer.MulterError ||
    err.message.startsWith("Invalid file format Only support png , jpg , jpeg")
  ) {
    return res.status(400).json({ message: err.message });
  }
  next(err);
}
module.exports = { multer, storage, multerErrorHandler };
