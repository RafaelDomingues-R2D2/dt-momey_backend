import { Transaction } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { ICreateTransactionDTO } from "../../dtos/ICreateTransactionDTO";
import { ITransactionsRepository } from "../../repositories/ITransactionsRepository";

@injectable()
export class CreateTransactionUseCase {
    constructor(
        @inject("TransactionRepository")
        private transactionRepository: ITransactionsRepository
    ){}

    async execute({ name, type, category, price }: ICreateTransactionDTO): Promise<Transaction>{
        await this.transactionRepository.create({
            name, 
            type, 
            category, 
            price
        })

        const transactions = await this.transactionRepository.findByName(name)

        return transactions
    }
}