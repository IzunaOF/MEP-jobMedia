import { Router } from "express";
import { addUserFriend,  unFriendUser} from "../../library/models/systemSchema";

const router = Router();

router.post('/addfriend', addUserFriend)
router.post('/unfriend', unFriendUser)

export const friendRoutes = router