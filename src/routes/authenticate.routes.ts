import { Router } from "express"
import { AuthencticateUserController } from "../modules/accounts/useCases/authenticateUser/AuthenticateUserController"

export const authenticateRoutes = Router()

const authenticateUserController = new AuthencticateUserController()

authenticateRoutes.post("/sessions", authenticateUserController.handle)