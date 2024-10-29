import { Router } from "express"
import storeToken from "../controllers/TokenController"

const route = Router()

route.post("/", storeToken)

export default route
