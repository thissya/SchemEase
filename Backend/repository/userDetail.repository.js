import { userDetailModel } from "../models/userDetail.model.js";


export async function createUserDetailRepo(data){
    const  newUserDetail = new userDetailModel(data);
    return await newUserDetail.save();
}

export async function getUserDetailByUserIdRepo(userId){
    return await userDetailModel.findOne({userId:userId});
}

export async function updateUserDetailByUserIdRepo(userId,data){
    return await userDetailModel.findOneAndUpdate(
        {userId:userId},
        {$set:data},
        {new :true}
    );
}

export async function deleteUserDetailByUserIdRepo(userId){
    return await userDetailModel.findOneAndDelete(
        {userId:userId}
    )
}