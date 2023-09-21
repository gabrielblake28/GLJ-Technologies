import express from "express";
import * as path from "path";

const app = express();
const port = 3000;

// Create a server instance

app.use(express.static(path.join(__dirname, "src")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "index.html"));
});

app.get("/lori", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "pages", "Lori.html"));
});

app.get("/jacob", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "pages", "Jacob.html"));
});

app.get("/gabriel", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "pages", "Gabriel.html"));
});

// Listen on port 3000
app.listen(port, () => {
  console.log(`local GLJ-Technologies listening on port ${port}`);
});
