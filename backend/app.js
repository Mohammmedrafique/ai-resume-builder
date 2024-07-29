// app.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Import and use routes
app.use("/resumes", require("./routes/resumeRoutes"));
app.use("/api", require("./routes/geminiRoutes"));

// Import and use authentication routes
app.use("/api", require("./routes/auth"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
