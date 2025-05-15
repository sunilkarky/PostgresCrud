const express = require("express");
const app = express();
const bookRoute = require("./routes/bookRoute");
require("./database/connection");
app.use(express.json());

app.use("/api/books", bookRoute);
app.listen(3000, (req, res) => {
  console.log("project has started at port 3000");
});
