import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import todoRoutes from "./routes/todo.routes.js"

dotenv.config();

const app=express();

/*
app.get("/",(req,res) => {
    res.send("Server is really ready");
});  */

app.use(express.json());

app.use("/api/todos", todoRoutes);


app.listen(5000, () => {
    connectDB();
    console.log("Server started at port number 5000")
}); 