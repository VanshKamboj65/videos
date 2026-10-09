import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
const connectDB=async()=>{
    try{
        const connectionInstance=await mongoose.connect(process.env.MONGODB_URI)
        console.log(`MONGO DB is connected ${connectionInstance.connection.host}/${DB_NAME}`)
    }
    catch(error){
        console.log("DB connection Error: ",error)
        process.exit(1) //terminates the application if the database connection fails.
    }
}
export default connectDB;
// async/await: waits for the database connection to succeed or fail.
// mongoose.connect(process.env.MONGODB_URI): connects using the URI stored in your .env file.
// try/catch: handles connection errors.