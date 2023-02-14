import { Transaction } from "@prisma/client";
import { ICreateTransactionDTO } from "../dtos/ICreateTransactionDTO";
import { IUpdateTransactionDTO } from "../dtos/IUpdateTransactionDTO";

export interface ITransactionsRepository {
    create(data: ICreateTransactionDTO): Promise<void>
    list(): Promise<Transaction[]>
    findByName(description: string): Promise<Transaction>
    findById(id: string): Promise<Transaction>
    update(data: IUpdateTransactionDTO): Promise<void> 
}