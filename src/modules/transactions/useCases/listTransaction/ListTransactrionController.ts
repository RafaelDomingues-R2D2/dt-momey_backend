import { Request, Response } from "express";
import { container } from "tsyringe"

import { CountTransactionUseCase } from "../countTransaction/CountTransactionUseCase";
import { ListTransactionUseCase } from "./ListTransactionUseCase"

export class ListTransactionController {
    async handle(request: Request, response: Response): Promise<Response>{
        const { name, skip, take } = request.query

        const listTransactionUseCase = container.resolve(ListTransactionUseCase)
        const countTransactionUseCase = container.resolve(CountTransactionUseCase)

        const Transactions = await listTransactionUseCase.execute(
            name, 
            skip, 
            take
        )

        const count = await countTransactionUseCase.execute()

        return response.status(200).json({Transactions, count})
    }
}