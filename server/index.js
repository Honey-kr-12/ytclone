import express from "express"
import dontenv from "dotenv"
import connectionToDatabase from "./db/connectionToDatabase.js"
import userRoutes from './Routes/user.js'
import cors from 'cors'
import bodyParser from "body-parser"
import videoRoutes from './routes/video.js'
import commentsRoutes from './routes/comments.js'
import path from 'path'


const __variableOfChoice = path.resolve();

dontenv.config();

const app=express()
app.use(cors());
app.use(express.json({limit:"30mb", extended:true}));
app.use(express.urlencoded({limit:"30mb", extended:true}));
app.use('/uploads',express.static(path.join('uploads')))


app.get('/',(req,res) => {
    res.send("hello world");
})

app.use(bodyParser.json())
app.use('/user',userRoutes);
app.use('/video',videoRoutes);
app.use('/comment',commentsRoutes);

app.use(express.static(path.join(__variableOfChoice, "/client/build")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__variableOfChoice, "client", "build", "index.html"));
  });

const PORT = process.env.PORT;
app.listen(PORT,() => {
    connectionToDatabase();
    console.log("server is running ",PORT)
})