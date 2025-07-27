import { ValidationError } from "yup";

export const validateDTO  = (schema) => async(req ,res ,next)=>{
    try{
        await schema.validate(req.body,{abortEarly:false});
        next();
    }catch(error){
        console.log(error);

        if(error.name="ValidationError"){
            const errors = error.inner.map((e)=>({message:e.message}));
            return next(new ValidationError(errors));
        }

        return next(error);
    }
}