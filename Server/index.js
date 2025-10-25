
import express from "express";
import userRoutes from "./src/routes/userRoutes.js";
import resourceRoutes from "./src/routes/resourceroutes.js";
import { connectDB } from "./src/config/db.js";

const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB();

app.get("/", (req, res) => {
  res.send("Server is running fine!");
});

// Connect user and resource routes
app.use("/api/user", userRoutes);
app.use("/api", resourceRoutes);

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
