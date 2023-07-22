import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'
import connectDB from './config/db.js'
const app = express();

import appUserRoutes from './routes/appUserRoutes.js'

import { notFound, errorHandler } from './middleware/errorMiddleware.js'
dotenv.config();

connectDB()

app.use(cors({
  Access_Control_Allow_Origin: "*",
  origin:"*",
  method:['GET','POST','PATCH','DELETE','PUT'],
  allowedHeaders:'Content-Type, Authorization, Origin, X-Requested-With, Accept'

}));

app.use(express.json())

app.use('/api/appUsers', appUserRoutes)



app.use(notFound)
app.use(errorHandler)


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



const PORT = process.env.PORT || 3000
app.listen(3000, console.log(
  `Server running in ${process.env.NODE_ENV} mode from PORT ${PORT}`
  ))