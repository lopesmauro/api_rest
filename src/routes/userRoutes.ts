import { Router } from "express"
import { loginRequired } from "../middlewares/loginRequired.ts"
import { indexUser, showUser, storeUser, deleteUser, updateUser } from "../controllers/UserController.ts"

const route = Router()

route.get("/", loginRequired, indexUser)
route.get("/:id", loginRequired, showUser)
route.post("/", storeUser)
route.delete("/:id", loginRequired, deleteUser)
route.put("/:id", loginRequired, updateUser)

export default route
