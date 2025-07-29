import { getUserByIdRepo, updateUserRepo } from "../repository/user.repository.js";
import { createUserDetailRepo, getUserDetailByUserIdRepo, updateUserDetailByUserIdRepo } from "../repository/userDetail.repository.js";
import { AppError, isAppError } from "../utils/error.js";
import { GeneralResponce } from "../utils/generalResponse.js";


export async function handleCreateUserDetail(data){
    try{
        console.log("Entered into userDetail Service ");
        console.log(data);
        
        const userDetailResponse = await createUserDetailRepo(data);
        console.log("User Detail data ",data);
        
        const user = await updateUserRepo(data.userId,userDetailResponse._id);
        console.log("userData with userDetail Mapped in userDetail Service ",user);

        const response = new GeneralResponce(
            true,
            userDetailResponse,
            200,
            "UserDetails Created Successfully"
        );

        return response;
    }catch(err){
        if(isAppError(err)){
            throw err;
        }
        throw new AppError(500,"Error creating UserDetail in Service");
    }
}

export async function handleGetUserDetailByUserId(data){
    try{
        const userDetailResponse = await getUserDetailByUserIdRepo(data.userId);

        const response = new GeneralResponce(
            true,
            userDetailResponse,
            200,
            "UserDetails Fetched by UserId"
        );

        return response;
    
    }catch(err){
        if(isAppError(err)){
            throw err;
        }
        throw new AppError(500,"Error in Fetching userDetails by UserId ");
    }
}

export async function handleUpdateUserDetailByUserId(data){
    try{
        const userId = data.userId;
        const userDetailResponse = await updateUserDetailByUserIdRepo(userId, data);
        const response = new GeneralResponce(
            true,
            userDetailResponse,
            200,
            "UserDetails Updated Successfully"
        );
        return response;
    }catch(err){
        if(isAppError(err)){
            throw err;
        }
        throw new AppError(500,"Error in Updating userDetails by UserId in service ");
    }

}