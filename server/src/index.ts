import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import {userRouter} from "./routes/user"
import dotenv from "dotenv";
 
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/user", userRouter);

mongoose.connect(process.env.MONGO_URI)

app.listen(3000, () => console.log("SERVER STARTED"));