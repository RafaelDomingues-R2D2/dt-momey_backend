import { prisma } from "../../../../shared/infra/database/prismaClient";
import { ICreateTransactionDTO } from "../../dtos/ICreateTransactionDTO";
import { ITransactionRepository } from "../ITransactionsRepository";

export class TransactionRepository implements ITransactionRepository {
    async create({ description, type, category, price }: ICreateTransactionDTO): Promise<void>{
        await prisma.transaction.create({
            data: {
                description,
                type,
                category,
                price
            }
        })
    }
}