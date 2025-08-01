import { Router } from "express";
import { CREATE_OPERATION, DELETE_OPERATION, READALL_OPERATION, READBY_ID_OPERATION, READBY_NAME_OPERATION, UPDATE_OPERATION } from "../../constants/router.constants.js";
import { adminAuth } from "../../middlewares/admin.middleware.js";
import { validateDTO } from "../../middlewares/validation.middleware.js";
import { createSchemeSchema, getSchemeBySchemeIdSchema, getSchemeBySchemeNameSchema, getSchemeBySectorIdScheme, updateSchemeSchema } from "../../dtos/scheme.dto.js";
import { createScheme, deleteSchemeBySchemeId, getAllScheme, getSchemeBySchemeId, getSchemeBySchemeName, getSchemeBySectorId, updateSchemeBySchemeId } from "../../controllers/scheme.controller.js";
import { auth } from "../../middlewares/auth.middleware.js";


export const schemeRouter = Router();

schemeRouter.post(CREATE_OPERATION,adminAuth,validateDTO(createSchemeSchema),createScheme);
schemeRouter.get(READALL_OPERATION,auth,getAllScheme);
schemeRouter.get(READBY_ID_OPERATION,auth,validateDTO(getSchemeBySchemeIdSchema),getSchemeBySchemeId);
schemeRouter.get("/sectorId",auth,validateDTO(getSchemeBySectorIdScheme),getSchemeBySectorId);
schemeRouter.get(READBY_NAME_OPERATION,auth,validateDTO(getSchemeBySchemeNameSchema),getSchemeBySchemeName);
schemeRouter.put(UPDATE_OPERATION,adminAuth,validateDTO(updateSchemeSchema),updateSchemeBySchemeId);
schemeRouter.delete(DELETE_OPERATION,adminAuth,validateDTO(getSchemeBySchemeIdSchema),deleteSchemeBySchemeId);