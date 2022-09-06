import express from "express";
import thoughtsRouter from "./routes/thoughts.js";
import mongoose from "mongoose";

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

// connect to Mongo DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(PORT, () => {
      console.log(`Connected to DB & listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
