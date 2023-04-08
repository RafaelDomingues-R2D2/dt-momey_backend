import { Transaction } from "@prisma/client";
import { ICreateTransactionDTO } from "../dtos/ICreateTransactionDTO";
import { IUpdateTransactionDTO } from "../dtos/IUpdateTransactionDTO";

export interface ITransactionsRepository {
    create(data: ICreateTransactionDTO): Promise<void>
    list(startDate: Date, endDate: Date, name?: string): Promise<Transaction[]>
    findByName(name: string): Promise<Transaction>
    findById(id: string): Promise<Transaction>
    update(data: IUpdateTransactionDTO): Promise<void> 
    delete(id: string): Promise<void>
}