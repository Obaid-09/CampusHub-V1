import dotenv from "dotenv"
dotenv.config({
    path: './.env'
})
import connectDB from "./db/indexdb.js";
import express from "express";
import {app} from "./app.js"

connectDB()
.then(() => {
  app.listen(process.env.PORT || 8000, () => {
    console.log(`Server running at: , ${process.env.PORT}`)
  })
})
.catch((err) => {
  console.log("MONGODB connection failed", err);
})