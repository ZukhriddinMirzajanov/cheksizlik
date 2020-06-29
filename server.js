if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to the database...")
    })
    .catch((err) => {
        console.log("Error during the connection!")
    });

const api = require("./server/routes/api");

app.use(express.static(path.join(__dirname, "dist")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", api);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist/index.html"))
});

app.listen(process.env.PORT || 3000);