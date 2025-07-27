import { Router } from "express";
import { CREATE_OPERATION, DELETE_OPERATION, READALL_OPERATION, READBY_ID_OPERATION, UPDATE_OPERATION } from "../../constants/router.constants.js";
import { validateDTO } from "../../middlewares/validation.middleware.js";
import { createUserSchema, getUserByIdSchema, updateUserSchema } from "../../dtos/user.dto.js";
import { createUser, deleteUserById, getAllUser, getUserById } from "../../controllers/user.controller.js";


export const userRouter = Router();

userRouter.post(CREATE_OPERATION,validateDTO(createUserSchema),createUser);
userRouter.get(READBY_ID_OPERATION,validateDTO(getUserByIdSchema),getUserById);
userRouter.delete(DELETE_OPERATION,validateDTO(getUserByIdSchema),deleteUserById);



//Testing
userRouter.get(READALL_OPERATION,getAllUser);

//Not Used
// userRouter.put(UPDATE_OPERATION,);