import { Router } from "express"
import { homeController } from "../controllers/HomeController.ts"

const route = Router()

route.get("/", homeController)

export default route
