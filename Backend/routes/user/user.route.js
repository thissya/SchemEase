import { Router } from "express";
import { CREATE_OPERATION, DELETE_OPERATION, LOGIN_OPERATION, READALL_OPERATION, READBY_ID_OPERATION, UPDATE_OPERATION } from "../../constants/router.constants.js";
import { validateDTO } from "../../middlewares/validation.middleware.js";
import { createUserSchema, getUserByIdSchema, loginSchema, updateUserSchema } from "../../dtos/user.dto.js";
import { createUser, deleteUserById, getAllUser, getUserById, login } from "../../controllers/user.controller.js";
import {auth} from '../../middlewares/auth.middleware.js'

export const userRouter = Router();

userRouter.post(LOGIN_OPERATION,validateDTO(loginSchema),login);
userRouter.post(CREATE_OPERATION,validateDTO(createUserSchema),createUser);
userRouter.get(READBY_ID_OPERATION,auth,validateDTO(getUserByIdSchema),getUserById);
userRouter.delete(DELETE_OPERATION,auth,validateDTO(getUserByIdSchema),deleteUserById);



//Testing
userRouter.get(READALL_OPERATION,getAllUser);

//Not Used
// userRouter.put(UPDATE_OPERATION,);