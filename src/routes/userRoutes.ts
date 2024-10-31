import { Router } from "express"
import { loginRequired } from "../middlewares/loginRequired.ts"
import { indexUser, showUser, storeUser, deleteUser, updateUser } from "../controllers/UserController.ts"

const route = Router()

route.get("/", loginRequired, indexUser)
route.get("/:", loginRequired, showUser)
route.post("/", loginRequired, storeUser)
route.delete("/", loginRequired, deleteUser)
route.put("/", loginRequired, updateUser)

export default route
