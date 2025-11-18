import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/db.js';
import cookieParser from 'cookie-parser';
import authRoutes from './router/authRoutes.js';
dotenv.config();
const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
    connectDB();
})