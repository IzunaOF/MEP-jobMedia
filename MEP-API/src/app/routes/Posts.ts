import { Router } from "express";
import {handleUserPost} from "../../library/models/systemSchema";

const router = Router();

router.post('/handlepost', handleUserPost)

export const postsRoutes =  router