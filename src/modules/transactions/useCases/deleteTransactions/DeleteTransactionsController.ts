import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteTransactionUseCase } from "./DeleteTransactionsUseCase";

export class DeleteTransactionController {
    async handle(request: Request, response: Response){
        const { id } = request.params

        const deleteTransactionUseCase = container.resolve(DeleteTransactionUseCase)

        await deleteTransactionUseCase.execute(id)
    
        return response.json(200)
    }
}