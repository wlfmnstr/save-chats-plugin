import express from "express";

// Create a new Express app instance
const app = express();

// Add a route handler for the base URL
app.get("/", (_req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});