import express from "express";
import thoughtsRouter from "./routes/thoughts.js";

const PORT = process.env.PORT;

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/thoughts", thoughtsRouter);

// listen for requests
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
