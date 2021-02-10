import express from 'express';
//import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routers/productRoute';
import {} from 'dotenv/config';
import connectDB from './src/database/dbconnection'

const app= express();
const PORT=process.env.PORT;


routes(app);
connectDB();
//DB conncetion
// mongoose.Promise= global.Promise;
// mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true,useUnifiedTopology: true  },()=>
// console.log("Connectd to DB"));


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.connect('/',(req,res)=>
    res.send(`This is get request ${PORT}`)
);

app.listen(PORT,()=>
    console.log(`This application is running on ${PORT}`)
);
