import { Router } from "express";

import { CreateTransactionController } from "../modules/transactions/useCases/createTransaction/CreateTransactionController";
import { FindByNameTransactionController } from "../modules/transactions/useCases/findByNameTransaction/FindByNameTransactionController";
import { ListTransactionController } from "../modules/transactions/useCases/listTransaction/ListTransactrionController";

export const transactionsRoutes = Router()

const createTransactionController = new CreateTransactionController()
const listTransactionController = new ListTransactionController()
const findByNameTransactionController = new FindByNameTransactionController()

transactionsRoutes.post("/create", createTransactionController.handle)
transactionsRoutes.get("/", listTransactionController.handle)
transactionsRoutes.get("/findByName", findByNameTransactionController.handle)
