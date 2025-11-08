import mongoose from 'mongoose';
import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json());


mongoose.connect(process.env.MONGODB_URL,
    { dbName: "nawin_fitness" }
).then(() => {
    console.log("Database connected.");
}).catch(error => {
    console.log(`Something went wrong while connecting to database. Error: ${error}`);
})