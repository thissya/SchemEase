import { CreateUserDTO } from "../dtos/user.dto.js";
import { handleCreateUser, handleGetAllUser } from "../services/user.service.js";


export async function createUser(req,res,next){
    try{
        const data = new CreateUserDTO(req.body);
        console.log(data);

        const response = await handleCreateUser(data);
        return res.status(response.statusCode).json(response);

    }catch(err){
        next(err);
    }
}

export async function getAllUser(req,res,next){
    try{
        const response = await handleGetAllUser();
        return res.status(response.statusCode).json(response);
    }catch(err){
        next(err);
    }
}

