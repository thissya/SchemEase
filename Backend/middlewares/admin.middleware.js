import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { UnauthorizedError, ForbiddenError } from '../utils/error.js';

dotenv.config();

export const adminAuth = async (req,res,next)=>{

        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if(!token){
            return next(new UnauthorizedError("Token not found. Unauthorized."));
        }

        jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
            if(err){
                return next(new ForbiddenError("Invalid Token Forbidden."));
            }

            if(user.role!=='Admin'){
                return next(new ForbiddenError("Access denied. Admins only can access."));
            }
            req.userId = user._id;
            req.role = user.role;
            next();
        });
}