import express from "express";

const PORT = process.env.PORT;

// express app
const app = express();

// middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.get("/", (req, res) => {
  res.json({ msg: "Welcome to the app" });
});

// listen for requests
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
