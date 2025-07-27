import { UserModel } from "../models/user.model.js";

export async function createUserRepo(data){
    const newUser = new UserModel(data);
    return await newUser.save();
}

export async function getByIdAndUpdateRepo(id,data){
    return await UserModel.findByIdAndUpdate(id,data); 
}

export async function getByEmailAndUpdateRepo(email,data){
    return await UserModel.findOneAndUpdate({email},data);
}

export async function deleteUserByIdRepo(id){
    return await UserModel.findByIdAndDelete(id);
}

export async function deleteUserByEmailRepo(email){
    return await UserModel.findOneAndDelete({email});
}

export async function getAllUserRepo(){
    return await UserModel.find();
}

export async function getUserByIdRepo(id){
    return await UserModel.findById({id});
}

export async function getUserByEmailRepo(email){
    return await UserModel.findOne({email});
}

