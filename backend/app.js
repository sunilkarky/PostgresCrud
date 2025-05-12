const app = require("express")();

require("./database/connection");
app.listen(3000, (req, res) => {
  console.log("project has started at port 3000");
});
