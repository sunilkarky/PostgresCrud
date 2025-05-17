const express = require("express");
const app = express();
const bookRoute = require("./routes/bookRoute");
require("./database/connection");
const cors = require("cors");
app.use(express.json());
//give file access to view the file eg: uploads folder ko access dine to access images
app.use(express.static("uploads"));

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use("/api/books", bookRoute);
app.listen(3000, (req, res) => {
  console.log("project has started at port 3000");
});
