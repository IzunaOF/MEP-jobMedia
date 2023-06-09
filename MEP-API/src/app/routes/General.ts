import { Router } from "express";
import { searchUsers } from "../../library/models/systemSchema";

const router = Router();

router.get('/search/:search', searchUsers)

export const generalRoutes  = router