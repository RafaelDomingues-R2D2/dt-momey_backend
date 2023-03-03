import { inject, injectable } from "tsyringe";
import { ITransactionsRepository } from "../../repositories/ITransactionsRepository";

@injectable()
export class CountTransactionUseCase {
    constructor(
        @inject("TransactionRepository")
        private transactionRepository: ITransactionsRepository
    ){}

    async execute(): Promise<Number>{
        const count = await this.transactionRepository.count()

        return count
    }

}