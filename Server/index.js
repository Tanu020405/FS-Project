import express from "express";
import resourceRoutes from "./src/routes/resourceroutes.js";

const app = express();
app.use(express.json()); // JSON body parse karega

app.get("/", (req, res) => {
  res.send("Server is running fine!");
});

app.post("/data", (req, res) => {
  console.log(req.body); // ye Postman se aaya data print karega
  res.send("Data received successfully");
});
app.use("/api", resourceRoutes);
app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
