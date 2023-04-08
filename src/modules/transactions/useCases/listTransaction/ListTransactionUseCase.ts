import { Transaction } from "@prisma/client"
import { inject, injectable } from "tsyringe"
import { ITransactionsRepository } from "../../repositories/ITransactionsRepository"

@injectable()
export class ListTransactionUseCase {
    constructor(
        @inject("TransactionRepository")
        private transactionRepository: ITransactionsRepository
    ){}

    async execute(month, name): Promise<Transaction[]>{

        const date = new Date()
        const startDate = month != 20 ? new Date(`${date.getFullYear()}-${parseInt(month) + 1}-01`) : new Date(`${date.getFullYear()}-01-31`)
        const endDate = month != 20 ? new Date(`${date.getFullYear()}-${parseInt(month) + 1}-31`) : new Date(`${date.getFullYear()}-12-31`)

        const transactions = await this.transactionRepository.list(startDate, endDate, name)

        return transactions
    }
}