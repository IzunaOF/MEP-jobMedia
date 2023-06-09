import { Router } from "express";
import {createAccount,searchUsers, singIn, updateUser } from "../../library/models/systemSchema";

const router = Router();

router.get('/search/:search', searchUsers)
router.post('/createAccount', createAccount)
router.post('/signIn', singIn)
router.post('/alter', updateUser)

export const accRoutes = router;