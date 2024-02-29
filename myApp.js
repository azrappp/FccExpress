let express = require("express");
let app = express();
module.exports = app;
let absolutePath = __dirname + "/views/index.html";
app.get("/", function (req, res) {
  res.sendFile(absolutePath);
});
