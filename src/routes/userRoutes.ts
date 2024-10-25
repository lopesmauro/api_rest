import { Router } from "express"
import { indexUser, showUser, storeUser, deleteUser, updateUser } from "../controllers/UserController.ts"

const route = Router()

route.get("/", indexUser)
route.get("/:id", showUser)
route.post("/", storeUser)
route.delete("/:id", deleteUser)
route.put("/:id", updateUser)

export default route
