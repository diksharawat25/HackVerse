const express = require("express");
const cors = require("cors");
require("dotenv").config();
const supabase = require("./supabaseClient");

const app = express();
app.use(cors());
app.use(express.json());

// Test route
app.get("/", async (req, res) => {
  res.send("Supabase Backend Running!");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// for running backedn server use command: node server.js