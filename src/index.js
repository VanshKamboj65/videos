import dotenv from "dotenv";
import connectDB from './database/index.js';
import app from "./app.js";
import dns from 'node:dns';

dns.setServers(['8.8.8.8', '8.8.4.4']);
dotenv.config({
    path:'./env'
})
connectDB()
.then(()=>{
    const port=process.env.PORT || 7000;
    app.listen(port,()=>{
        console.log(`App is listening at port ${port}`);
    })
})
.catch((error)=>{
    console.log("Mongo DB connection failed!!!:",error);
})





// app.on((error)=>{
//         console.log("Error in express: ",error);
//         throw error;
//     })


// const app=express();
// (async()=>{
//     try{
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//        app.on("error",(error)=>{
//             console.log("error in express");
//             throw error;
//        })
//        app.listen(process.env.PORT,()=>{
//            console.log(`App is listening on ${process.env.PORT}`)
//        })
//     }
//     catch(error){
//         console.log("Error Occured: ",error);
//         throw error;
//     }
// })()