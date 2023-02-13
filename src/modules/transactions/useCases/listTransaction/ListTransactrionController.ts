import { Request, Response } from "express";
import { container } from "tsyringe"

import { ListTransactionUseCase } from "./ListTransactionUseCase"

export class ListTransactionController {
    async handle(request: Request, response: Response): Promise<Response>{

        const listTransactionUseCase = container.resolve(ListTransactionUseCase)

        const query = await listTransactionUseCase.execute()

        return response.json(query)
    }
}