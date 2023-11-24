import express, { json } from "express";
import { PORT} from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js"
import cors from 'cors'
import 'dotenv/config'
const app = express();

app.use(express.json());

app.use(cors({origin:"*"}))
  

app.get('/', (req, res) => {
    console.log(req);
    return res.status(200).send("Welcome to mern stack")
})

app.use('/books',booksRoute)

mongoose
    .connect(process.env.mongoDBURL)
    .then(() => {
        console.log("App connected to database");
        app.listen(PORT, () => {
            console.log(`App is Listening to port:${PORT}`);
        })
    })
    .catch((e) => {
        console.log(e);
    })