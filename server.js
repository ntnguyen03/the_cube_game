const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 10000; // Sử dụng PORT do Render cung cấp

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});
