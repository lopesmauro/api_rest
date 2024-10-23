import { Router } from "express"
import { indexUser, showUsers, storeUser, deleteUser, updateUser } from "../controllers/UserController.js"

const route = Router()

route.get("/:id", indexUser)
route.get("/", showUsers)
route.post("/", storeUser)
route.delete("/", deleteUser)
route.put("/", updateUser)

export default route
