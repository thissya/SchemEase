import { ForbiddenError, UnauthorizedError } from "../utils/error.js";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const auth = (req,res,next)=>{
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(!token){
        return next(new UnauthorizedError("User Unauthorized"));
    }

    jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
        if(err){
            return next(new ForbiddenError("Token Forbidden"));
        }
        req.userId=user.id;
        // req.role = user.role; // we can use this when we dont need admin middleware but need to handle the role at service layer
        next();
    });

}