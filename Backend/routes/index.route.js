import { Router } from "express";
import { ROUTER_USER, ROUTER_USERDETAIL} from "../constants/router.constants.js";
import { userRouter } from "./user/user.route.js";
import { errorHandler } from "../middlewares/errorHandler.middleware.js";
import { userDetailRouter } from "./userDetail/userDetail.route.js";


export const appRouter = Router();

appRouter.use(ROUTER_USER,userRouter);
appRouter.use(ROUTER_USERDETAIL,userDetailRouter);
appRouter.use(errorHandler);