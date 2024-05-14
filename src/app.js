const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const path = require("path");
const router = require("./routes/router");
const PORT = process.env.PORT || 3000;

const staticPath = path.join(__dirname, "../public");
const views = path.join(__dirname, "./views");
app.use(express.static(staticPath));
app.use("/details", express.static(staticPath));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.set("view engine", "ejs");
app.set("views", views);

app.use("/", router);

app.listen(PORT, console.log(`server listening at http://localhost:${PORT}`));
