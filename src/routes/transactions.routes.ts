import { Router } from "express";
import { CreateTransactionController } from "../modules/transactions/useCases/createTransaction/CreateTransactionController";

export const transactionsRoutes = Router()

const createTransactionController = new CreateTransactionController()

transactionsRoutes.post("/create", createTransactionController.handle)