import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/db.js';


dotenv.config();
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});
const port = process.env.PORT || 3000;
app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
    connectDB();
})