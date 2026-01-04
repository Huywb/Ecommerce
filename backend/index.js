import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser';
import { connectDB } from './libs/ConnectDB.js';
import userRouter from './routes/user.route.js';
import productRouter from './routes/product.route.js';
import bannerRouter from './routes/banner.route.js';
import categoryRouter from './routes/category.route.js';
import cartRouter from './routes/cart.route.js';
import orderRouter from './routes/order.route.js';


dotenv.config() 

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.json());
const PORT = process.env.PORT || 5000;

connectDB();


app.use('/api/v1/user', userRouter);
app.use('/api/v1/product', productRouter)
app.use('/api/v1/banner',bannerRouter)
app.use('/api/v1/category',categoryRouter)
app.use('/api/v1/logo',logoRouter)
app.use('/api/v1/cart',cartRouter)
app.use('/api/v1/order',orderRouter)



app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})