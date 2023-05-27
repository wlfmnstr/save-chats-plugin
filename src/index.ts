import express from "express";
import path from "path";

// Create a new Express app instance
const app = express();

// Add a route handler for the base URL
app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});