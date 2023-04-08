import { inject, injectable } from "tsyringe"
import { TransactionRepository } from "../../repositories/implementations/TransactionsRepository"
import { ITransactionsRepository } from "../../repositories/ITransactionsRepository"

@injectable()
export class DeleteTransactionUseCase {
    constructor(
        @inject("TransactionRepository")
        private TransactionRepository: ITransactionsRepository
    ){}

    async execute(id: string): Promise<void>{
        await this.TransactionRepository.delete(id)
    }
}