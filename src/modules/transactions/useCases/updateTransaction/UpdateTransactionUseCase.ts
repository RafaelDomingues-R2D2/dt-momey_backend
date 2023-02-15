import { Transaction } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { IUpdateTransactionDTO } from "../../dtos/IUpdateTransactionDTO";
import { ITransactionsRepository } from "../../repositories/ITransactionsRepository";

@injectable()
export class UpdateTransationUseCase {
    constructor(
        @inject("TransactionRepository")
        private transactionRepository: ITransactionsRepository
    ){}

    async execute({id, name, type, category, price}: IUpdateTransactionDTO): Promise<Transaction>{
        await this.transactionRepository.update({
            id,
            name,
            type,
            category,
            price
        })

        const transactions = await this.transactionRepository.findById(id)

        return transactions
    }
}