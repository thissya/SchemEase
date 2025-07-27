import { Router } from "express";
import { CREATE_OPERATION, DELETE_OPERATION, READALL_OPERATION, UPDATE_OPERATION } from "../../constants/router.constants.js";
import { validateDTO } from "../../middlewares/validation.middleware.js";
import { createUserSchema, updateUserSchema } from "../../dtos/user.dto.js";
import { createUser, getAllUser } from "../../controllers/user.controller.js";


export const userRouter = Router();

userRouter.post(CREATE_OPERATION,validateDTO(createUserSchema),createUser);
userRouter.get(READALL_OPERATION,getAllUser);
// userRouter.put(UPDATE_OPERATION,);
// userRouter.delete(DELETE_OPERATION,);