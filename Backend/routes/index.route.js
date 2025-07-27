import { Router } from "express";
import { ROUTER_USER} from "../constants/router.constants.js";
import { userRouter } from "./user/user.route.js";
import { errorHandler } from "../middlewares/errorHandler.middleware.js";


export const appRouter = Router();

appRouter.use(ROUTER_USER,userRouter);

appRouter.use(errorHandler);