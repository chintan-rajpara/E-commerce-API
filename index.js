const express = require("express");

const env = require("dotenv").config();

const port = process.env.PORT;

const app = express();

const mongoose = require("mongoose");

mongoose
    .connect(process.env.MONGO_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then(() => console.log("Database connected."))
    .catch((err) => console.log(err));

app.use(express.urlencoded());

app.use("/admin", require("./routes/admin/Admin"));

app.listen(port, (err) => {
    err
        ? console.log("Server not responding")
        : console.log(`Server respond successfully at port: ${port}`);
});
