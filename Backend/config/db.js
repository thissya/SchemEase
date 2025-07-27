import mongoose from "mongoose";

export const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("DB Connected Successfully");
    }catch(e){
        console.log("Error in DB Connection ",e.message);
    }
}
