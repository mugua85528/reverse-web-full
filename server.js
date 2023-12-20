const express = require("express");
const app = express();
const mongoose = require("mongoose");
const reverseRoute = require("./routes/reverse");
const shopRoute = require("./routes/shop");
const cors = require("cors");

mongoose
  .connect("mongodb://127.0.0.1/reverseDB")
  .then(() => {
    console.log("reverseDB ing...");
  })
  .catch((e) => {
    console.log(e);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api", reverseRoute);
app.use("/shop", shopRoute);

app.listen(8080, () => {
  console.log("back-server in port 8080...");
});
