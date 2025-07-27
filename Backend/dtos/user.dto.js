import yup from 'yup';

export const createUserSchema = yup.object({
    userName: yup
    .string("UserName must be String")
    .required("UserName is Required")
    .min(3,"UserName must be minimum  3 characters")
    .max(20,"UserName should be within 20 characters"),

    email:yup
    .string("Email must be String")
    .required("Email is Required")
    .email("Email is Invalid"),

    password:yup
    .string()
    .required("Password is Required")
    .min(6,"Password must be minimum 6 characters")
    .max(20,"Password should be within 20 characters")

});

export const updateUserSchema = yup.object({
    userName:yup
    .string()
    .optional()
    .typeError("Name must be String"),

    email:yup
    .string()
    .optional()
    .email("Email is InValid"),

    password:yup
    .string()
    .optional()
    .min(6,"Password must be minimum 6 characters")
    .max(20,"Password should be within 20 characters"),

    id:yup
    .string()
    .required()
    .matches(/^[0-9a-fA-F]{24}$/,"ID must be a valid MongoDB objectId")

});

export const getUserByIdSchema = yup.object({
    id:yup
    .string()
    .required("Id is requried")
    .matches(/^[0-9a-fA-F]{24}$/,"ID must be a valid MongoDB objectId"),
});

export class CreateUserDTO{
    constructor(data){
        Object.assign(this,data);
    }
    validate(){
        return createUserSchema.validate(this,{abortEarly:false});
    }
}

export class UpdateUserDTO{
    constructor(data){
        Object.assign(this,data);
    }
    validate(){
        return updateUserSchema.validate(this,{abortEarly:false});
    }
}

export class GetUserByIdDTO{
    constructor(data){
        Object.assign(this,data);
    }
    validate(){
        return getUserByIdSchema.validate(this,{abortEarly:false});
    }
}