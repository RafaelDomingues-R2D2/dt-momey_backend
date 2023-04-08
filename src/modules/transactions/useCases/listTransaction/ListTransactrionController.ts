import { Request, Response } from "express";
import { container } from "tsyringe"

import { ListTransactionUseCase } from "./ListTransactionUseCase"

export class ListTransactionController {
    async handle(request: Request, response: Response): Promise<Response>{
        const { month, name } = request.query

        const listTransactionUseCase = container.resolve(ListTransactionUseCase)

        const transactions = await listTransactionUseCase.execute(month, name)

        return response.status(200).json({transactions})
    }
}