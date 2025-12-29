import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser';
import { connectDB } from './libs/ConnectDB.js';
import userRouter from './routes/user.route.js';


dotenv.config() 

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.json());
const PORT = process.env.PORT || 5000;

connectDB();


app.use('/api/v1/user', userRouter);



app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})