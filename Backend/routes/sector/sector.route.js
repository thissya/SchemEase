import { CREATE_OPERATION, DELETE_OPERATION, READALL_OPERATION, READBY_ID_OPERATION, READBY_NAME_OPERATION, UPDATE_OPERATION } from "../../constants/router.constants.js";
import { createSector, deleteSectorBySectorId, getAllSector, getSectorBySectorId, getSectorBySectorName, updateSectorBySectorId } from "../../controllers/sector.controller.js";
import { createSectorSchema, getSectorBySectorNameSchema } from "../../dtos/sector.dto.js";
import { validateDTO } from "../../middlewares/validation.middleware.js";
import {adminAuth} from '../../middlewares/admin.middleware.js';
import { auth } from "../../middlewares/auth.middleware.js";
import { Router } from "express";

export const sectorRouter = Router();

sectorRouter.post(CREATE_OPERATION,adminAuth,validateDTO(createSectorSchema),createSector);
sectorRouter.get(READALL_OPERATION,auth,getAllSector);
sectorRouter.get(READBY_ID_OPERATION,auth,getSectorBySectorId);
sectorRouter.get(READBY_NAME_OPERATION,auth,validateDTO(getSectorBySectorNameSchema),getSectorBySectorName);
sectorRouter.put(UPDATE_OPERATION,adminAuth,updateSectorBySectorId);
sectorRouter.delete(DELETE_OPERATION,adminAuth,deleteSectorBySectorId);
