const express = require("express");
const app = express();
app.get("/", function () {
  res.send("IT Worred");
});
app.listen(process.env.PORT || 5000);
module.exports = app;
