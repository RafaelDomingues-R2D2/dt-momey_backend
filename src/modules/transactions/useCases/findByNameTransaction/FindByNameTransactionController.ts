import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindByNameTransactionUseCase } from "./FindByNameTransactionUseCase"

export class FindByNameTransactionController {
    async handle(request: Request, response: Response): Promise<Response>{
        const { description } = request.body

        const findByNameTransactionUseCase = container.resolve(FindByNameTransactionUseCase)

        const query = await findByNameTransactionUseCase.execute(description)

        return response.json(query)
    }
}