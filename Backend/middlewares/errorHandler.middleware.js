import { isAppError } from "../utils/error.js"


export const errorHandler  = (error,req,res,next)=>{
    if(isAppError(error)){
        return res.status(error.statusCode).json(error.format());
    }

    return res.status(500).json({
        success:false,
        isOperation:false,
        message:error.message,
        stack:error.stack
    });
}