import { createUserRepo, getAllUserRepo, getUserByIdRepo } from "../repository/user.repository.js";
import { AppError, isAppError } from "../utils/error.js";
import { GeneralResponce } from "../utils/generalResponse.js";


export async function handleCreateUser (data){
    try{
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

export async function handleGetUserById(data){
    try{
        const userResponse = await getUserByIdRepo(data.id);
        const response = new GeneralResponce(true,
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