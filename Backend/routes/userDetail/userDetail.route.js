import { Router } from "express";
import { CREATE_OPERATION, READBY_ID_OPERATION, UPDATE_OPERATION } from "../../constants/router.constants.js";
import {auth} from "../../middlewares/auth.middleware.js";
import { validateDTO } from "../../middlewares/validation.middleware.js";
import { createUserDetailSchema, getUserDetailByUserIdSchema ,updateUserDetailByUserIdSchema } from "../../dtos/userDetail.dto.js";
import { createUserDetail, getUserDetailByUserId, updateUserDetailByUserId } from "../../controllers/userDetail.controller.js";

export const userDetailRouter = Router();

userDetailRouter.post(CREATE_OPERATION,auth,validateDTO(createUserDetailSchema),createUserDetail);
userDetailRouter.get(READBY_ID_OPERATION,auth,validateDTO(getUserDetailByUserIdSchema),getUserDetailByUserId);
userDetailRouter.put(UPDATE_OPERATION,auth,validateDTO(updateUserDetailByUserIdSchema),updateUserDetailByUserId);