const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    //image format checker
    const acceptedFileFormat = ["image/jpg", "image/png", "image/jpeg"];
    if (!acceptedFileFormat.includes(file.mimetype)) {
      cb(new Error("Invalid file format oly support png , jpg , jpeg"), false);
      return;
    }
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
module.exports = { multer, storage };
