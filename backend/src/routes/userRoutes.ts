import express from 'express'
import {register} from '../controllers/userControllers'

export const userRouter = express.Router();

userRouter.route("/").post(register);


// module.exports=userRouter;