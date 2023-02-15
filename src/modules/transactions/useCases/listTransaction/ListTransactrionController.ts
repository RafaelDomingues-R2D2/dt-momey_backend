import { Request, Response } from "express";
import { container } from "tsyringe"

import { ListTransactionUseCase } from "./ListTransactionUseCase"

export class ListTransactionController {
    async handle(request: Request, response: Response): Promise<Response>{
        const { name } = request.query

        console.log(name)

        const listTransactionUseCase = container.resolve(ListTransactionUseCase)

        const transactions = await listTransactionUseCase.execute(name)

        return response.status(200).json({transactions})
    }
}