require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db/db");
const index = require("./routes/index");
const auth = require("./routes/auth");
const path = require("path");

const app = express();

db();

//cors to allow cross origin resource sharing multiple domains

app.use(cors({ origin: "https://blogger-sourav-ojha.vercel.app/" }));

// app.use(cors());
app.use(express.json());
app.disable("x-powered-by"); // Hide the fact that we are using express for security reasons

const port = process.env.PORT || 3000;
// API routes
app.use("/api/v1/", index);
app.use("/api/v1/", auth);

// index.html from public to be sent
app.use(express.static("public"));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
