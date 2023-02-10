import { inject, injectable } from "tsyringe";
import { ICreateTransactionDTO } from "../../dtos/ICreateTransactionDTO";
import { ITransactionRepository } from "../../repositories/ITransactionsRepository";

@injectable()
export class CreateTransactionUseCase {
    constructor(
        @inject("TransactionRepository")
        private transactionRepository: ITransactionRepository
    ){}

    async execute({ description, type, category, price }: ICreateTransactionDTO): Promise<void>{
        await this.transactionRepository.create({
            description, 
            type, 
            category, 
            price
        })
    }
}