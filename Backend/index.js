//es6 syntax --> const express=require("express")

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors';

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js"

const app = express();
app.use(cors())
app.use(express.json());

dotenv.config();

const port = process.env.PORT || 4000;
const URL = process.env.MongoDBURL;

// connecting to mongodb
try {
  mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to mongodb");
} catch (error) {
  console.log("Error: ", error);
}
//defining route

app.use("/book", bookRoute);
app.use("/user",userRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
