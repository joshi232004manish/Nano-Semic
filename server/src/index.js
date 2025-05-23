import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import productRouter from './routes/product.route.js'
import uploadRouter from './routes/upload.route.js'
import authRoutes from './routes/auth.js'
import adminRoutes from './routes/adminRoutes.js'
import cors from 'cors'
import { errorHandler } from './utils/error.js'

dotenv.config()

mongoose.connect(process.env.MONGO).then(() => {
  console.log('MongoDB connected')
}   ).catch(err => {    
  console.error('MongoDB connection error:', err)
});


const app = express();
const port = 5000;



app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
); 
app.use(express.json())


app.use('/api/product',productRouter);
app.use('/api/image',uploadRouter);

app.use('/api/admin', adminRoutes);
app.use("/api/auth", authRoutes);

app.use((err,req,res,next)=>{
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  // next(err)
  return res.status(statusCode).json(
    {
      success:false,
      statusCode,
      message
       
    }
  );
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
