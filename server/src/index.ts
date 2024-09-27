import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import {userRouter} from "./routes/user"
 
const app = express();

app.use(express.json());
app.use(cors());

app.use("/user", userRouter);

mongoose.connect(
    "mongodb+srv://kuslhhh:S1MK5OaVN0HRnuN8@kushhh.yobcs.mongodb.net/kiz"
)

app.listen(3000, () => console.log("SERVER STARTED"));