import { configDotenv } from 'dotenv';
import express from 'express';
import { connectDB } from './config/db.js';
import { appRouter } from './routes/index.route.js';

const app = express();
configDotenv();
app.use(express.json());

await connectDB();

// app.use("/",async (req,res)=>{
//     res.json("health check");
// });

app.use("/api",appRouter);

app.listen(process.env.PORT,()=>{
    console.log(`Port is running in ${process.env.PORT}`);
});

