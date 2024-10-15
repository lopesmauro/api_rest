import { Router } from "express"
import { homeController } from "../controllers/HomeController.js"

const route = Router()

route.get("/", homeController)

export default route
