const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("works fine");
});


app.use((req, res) => {
    res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
    if (req.file) {
        const { path } = req.file;
        fs.unlinkSync(path);
    }
    const { status = 500, message = "Server error" } = err;
    res.status(status).json({ message });
});

module.exports = app;
