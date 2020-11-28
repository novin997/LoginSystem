"use strict";

import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/auth";

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/user", authRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Hello" });
});

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});

mongoose.connect(
  process.env.DB_URL!,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);
