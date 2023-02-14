import { inject, injectable } from "tsyringe";
import { IUpdateTransactionDTO } from "../../dtos/IUpdateTransactionDTO";
import { ITransactionsRepository } from "../../repositories/ITransactionsRepository";

@injectable()
export class UpdateTransationUseCase {
    constructor(
        @inject("TransactionRepository")
        private transactionRepository: ITransactionsRepository
    ){}

    async execute({id, name, type, category, price}: IUpdateTransactionDTO): Promise<void>{
        await this.transactionRepository.update({
            id,
            name,
            type,
            category,
            price
        })
    }
}