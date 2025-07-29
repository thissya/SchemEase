import { UserModel } from "../models/user.model.js";


export async function createUserRepo(data){
    const newUser = new UserModel(data);
    return await newUser.save();
}

export async function updateUserRepo(userId, userDetailId) {
    return await UserModel.findByIdAndUpdate(
        userId,
        {userDetail:userDetailId,details:true},
        { new: true }  
    );
}


//Account Deletion
export async function deleteUserByIdRepo(id){
    return await UserModel.findByIdAndDelete({_id:id});
}

export async function getUserByIdRepo(id){
    return await UserModel.findById({_id:id});
    // return await UserModel.findOne({_id:id});
}

export async function getUserByEmailRepo(email){
    return await UserModel.findOne({email:email});
}

//testing
export async function getAllUserRepo(){
        return await UserModel.find();
}


//-----------------------------------------------
//Not in App use


// //for updating the details like email and password
// export async function getByIdAndUpdateRepo(id,data){
//     return await UserModel.findByIdAndUpdate(id,data); 
// }


// export async function getByEmailAndUpdateRepo(email,data){
//     return await UserModel.findOneAndUpdate({email},data);
// }

// export async function deleteUserByEmailRepo(email){
//     return await UserModel.findOneAndDelete({email});
// }



