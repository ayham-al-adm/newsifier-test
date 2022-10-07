const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 3000;

const gifsRouter = require("./routes/gifs.routes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use("/gifs", gifsRouter);

app.listen(port);
console.log("APP STARTED ON PORT:", port);
