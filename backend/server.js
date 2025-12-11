import mongoose from 'mongoose';
import express from "express";
import dotenv from "dotenv";
import adminRouter from "./routes/adminRouter.js";
import path from 'path';
import { fileURLToPath } from 'url';
import session from "express-session";

dotenv.config();
const app = express();

app.use(express.json());

//Configure Express to use EJS templates for rendering views
app.set('view engine', 'ejs');

// Define the folder path where Express will look for EJS templates during rendering
app.set('views', 'views');

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

app.use(express.static(path.join(_dirname, 'public')));

app.use(
    session({
        secret: process.env.SECREt_KEY,
        resave: false,
        saveUninitialized: false,
        cookie: {
            secure: false, //must be false on localhost
            maxAge: 1000 * 60 * 60 //1 hour
        }
    })
);

app.use('/admin', adminRouter);

const port = process.env.PORT

mongoose.connect(process.env.MONGODB_URL,
    { dbName: "nawin_fitness" }
).then(() => {
    app.listen(port, () => {
        console.log(`Database connected. Server running on http://localhost:${port}/admin`);
    })
}).catch(error => {
    console.log(`Something went wrong while connecting to database. Error: ${error}`);
})