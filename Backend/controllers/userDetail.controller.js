import { createUserDetailDTO, getUserDetailByUserIdDTO, updateUserDetailDTO } from "../dtos/userDetail.dto.js";
import { handleCreateUser } from "../services/user.service.js";
import { handleCreateUserDetail, handleGetUserDetailByUserId, handleUpdateUserDetailByUserId } from "../services/userDetail.service.js";


export async function createUserDetail(req,res,next){
    try{
        const data = new createUserDetailDTO(req.body);
        console.log("In User Detail Controller ",data);
        data.userId = req.userId;
        console.log("In User Detail Controller After User Id \n",data);
        const response = await handleCreateUserDetail(data);
        return res.status(response.statusCode).json(response);

    }catch(err){
        next(err);
    }
}

export async function getUserDetailByUserId(req,res,next){
    try{
        // console.log("Entered userDetail Controller")
        // const userId = req.userId;
        // const obj = {userId:userId};

        // console.log(req.body);
        const data = new getUserDetailByUserIdDTO({...req.body,userId:req.userId});

        console.log("After DTO ",data);

        const response = await handleGetUserDetailByUserId(data);
        console.log(response);
        return res.status(response.statusCode).json(response);

    }catch(err){
        next(err);
    }
}

export async function updateUserDetailByUserId(req,res,next){
    try{
        const data =  new updateUserDetailDTO(req.body);
        console.log(data);

        const response = await handleUpdateUserDetailByUserId(data);
        return res.status(response.statusCode).json(response);

    }catch(err){
        next(err);
    }
}

