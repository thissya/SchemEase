import { createUserRepo, deleteUserByIdRepo, getAllUserRepo, getUserByEmailRepo, getUserByIdRepo } from "../repository/user.repository.js";
import { deleteUserDetailByUserIdRepo } from "../repository/userDetail.repository.js";
import { AppError, InternalValidationError, isAppError } from "../utils/error.js";
import { GeneralResponce } from "../utils/generalResponse.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function handleLogin(data){
    try{
        const email = data.email;
        const password = data.password;

        const existUser = await getUserByEmailRepo(email);

        if(!existUser){
            throw new InternalValidationError("User Not Found!");
        }

        const hashedPassword = await bcrypt.compare(password,existUser.password);

        if(!hashedPassword){
            throw new InternalValidationError("Invalid Credentials : Password doesn't match");
        }

        const token = jwt.sign({id:existUser._id,role:existUser.role},process.env.JWT_SECRET,{expiresIn:'5h'});

        const response  = new GeneralResponce(
            true,
            token,
            200,
            "Login Successfull"
        )
        return response;
    }catch(err){
        if(isAppError(err)){
            throw err;
        }
        throw new AppError(500,"Error in handleLogin service");
    }
}

export async function handleCreateUser(data){
    try{
        
        const email = data.email;
        const existUser = await getUserByEmailRepo(email);
        
        if (existUser){
            throw new InternalValidationError("Email already exists");
        }
        
        const hashedPassword = await bcrypt.hash(data.password,10); 
        data.password = hashedPassword;
        
        const userResponse = await createUserRepo(data);
        const response = new GeneralResponce(
            true,
            userResponse,
            200,
            "User Created Successfully"
        );

        return response;
    }catch(err){
        if(isAppError(err) ){
            throw err;
        }
        throw new AppError(500,"Error Creating User in service");
    }
}

export async function handleGetUserById(data){
    try{
        const userResponse = await getUserByIdRepo(data.userId);
        const response = new GeneralResponce(
            true,
            userResponse,
            200,
            "User Fetched by Id"
        );
        
        return response;
        
    }catch(err){
        if(isAppError(err)){
            throw err;
        }
        throw new AppError(500,"Error in Fetching Details by Id");
    }
}

export async function handleDeleteUserById(data){
    try{
        const id = data.userId;
        const detailResponse = await deleteUserDetailByUserIdRepo(id);
        const userResponse = await deleteUserByIdRepo(id);
        const response = new GeneralResponce(
            true ,
            userResponse,
            200,
            "User and User Details Deleted Successfully"
        );

        return response;  
    }catch(err){
        if(isAppError(err)){
            throw err;
        }
        throw new AppError(500,"Error in Deleting Details by id");
    }
}

//Testing 
export async function handleGetAllUser(){
    try{
        const userResponse = await getAllUserRepo();
        const response = new GeneralResponce(
            true,
            userResponse,
            200,
            "All the User Details are Fetched"
        );
        return response;
    }catch(err){
        if(isAppError(err)){
            throw err;
        }
        throw new AppError(500,"Error in fetching Details in Service");
    }
}

//Not used
// export async function handleGetUserByIdAndUpdate(data){
    //     try{
        //         if(data.email){
            
        //         }
        //     }catch(err){
            //         if(isAppError(err)){
                //             throw err;
//         }
//         throw new AppError(500,"Error in Updating and Fetching Details By Id in service");
//     }
// }