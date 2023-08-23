import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user-routes';
import adminRouter from './routes/admin-routes';
import movieRouter from './routes/movie-router';
import bookingsRouter from './routes/booking-routes';
import cors from 'cors'
dotenv.config()
const app=express();

app.use(cors()) // Enable CORS for all routes
//middlewares
app.use(express.json())
app.use('/user',userRouter)
app.use("/admin",adminRouter)
app.use("/movie",movieRouter)
app.use("/booking",bookingsRouter)


mongoose.connect(
    `mongodb+srv://psreehari99:${process.env.MONGODB_PASSWORD}@cluster0.wbfn1kd.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(()=>{
        app.listen(5000,()=>{
            console.log(`Connected To Databsase And Server is running`)
        })
    })
    .catch((e)=>{
        console.log(e)
    })


//psreehari99(mongodb username)
//NmnrO5QK7tGMM9k8(mongodb password)