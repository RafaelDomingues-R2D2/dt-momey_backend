import { Router } from "express";

import { CreateTransactionController } from "../modules/transactions/useCases/createTransaction/CreateTransactionController";
import { FindByNameTransactionController } from "../modules/transactions/useCases/findByNameTransaction/FindByNameTransactionController";
import { ListTransactionController } from "../modules/transactions/useCases/listTransaction/ListTransactrionController";
import { UpdateTransactionController } from "../modules/transactions/useCases/updateTransaction/UpdateTransactionController";

export const transactionsRoutes = Router()

const createTransactionController = new CreateTransactionController()
const listTransactionController = new ListTransactionController()
const findByNameTransactionController = new FindByNameTransactionController()
const updateTransactionController = new UpdateTransactionController()

transactionsRoutes.post("/create", createTransactionController.handle)
transactionsRoutes.get("/", listTransactionController.handle)
transactionsRoutes.get("/findByName/:name", findByNameTransactionController.handle)
transactionsRoutes.patch("/:id/update", updateTransactionController.handle)
