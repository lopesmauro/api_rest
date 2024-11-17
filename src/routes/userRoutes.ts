import { Router } from "express"
import { loginRequired } from "../middlewares/loginRequired.ts"
import { showUser, storeUser, deleteUser, updateUser } from "../controllers/UserController.ts"

const route = Router()

route.get("/", loginRequired, showUser)
route.post("/", storeUser)
route.delete("/", loginRequired, deleteUser)
route.put("/", loginRequired, updateUser)

export default route
