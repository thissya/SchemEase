import { createUserRepo, deleteUserByIdRepo, getAllUserRepo, getUserByIdRepo } from "../repository/user.repository.js";
import { AppError, isAppError } from "../utils/error.js";
import { GeneralResponce } from "../utils/generalResponse.js";
import bcrypt from 'bcryptjs';

export async function handleCreateUser(data){
    try{
        
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
        const userResponse = await getUserByIdRepo(data.id);
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
        const userResponse = await deleteUserByIdRepo(data.id);
        const response = new GeneralResponce(
            true ,
            userResponse,
            200,
            "User Deleted Successfully"
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