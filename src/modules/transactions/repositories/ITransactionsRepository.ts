import { Transaction } from "@prisma/client";
import { ICreateTransactionDTO } from "../dtos/ICreateTransactionDTO";

export interface ITransactionsRepository {
    create(data: ICreateTransactionDTO): Promise<void>
    list(): Promise<Transaction[]>
    findByName(data: string): Promise<Transaction>
}