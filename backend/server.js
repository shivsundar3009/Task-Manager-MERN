import express from "express";
import mongoose from "mongoose";

const app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/task-manager")
  .then(() => console.log("MongoDB connected!"))
  .catch(err => console.log("MongoDB connection error:", err));

//
app.get('/', ( req ,res )=> {
    res.json({message: "backend is working properly"});
});

app.listen(5000, () => console.log('server is running at port 5000'));