const express = require("express");
const db = require("./database/db");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", require("./routes/users"));

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server started on port ${port}`));
