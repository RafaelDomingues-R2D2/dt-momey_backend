import { Transaction } from "@prisma/client";
import { prisma } from "../../../../shared/infra/database/prismaClient";
import { ICreateTransactionDTO } from "../../dtos/ICreateTransactionDTO";
import { IUpdateTransactionDTO } from "../../dtos/IUpdateTransactionDTO";
import { ITransactionsRepository } from "../ITransactionsRepository";

export class TransactionRepository implements ITransactionsRepository {
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

    async list(): Promise<Transaction[]>{
        const transactions = await prisma.transaction.findMany()

        return transactions
    }

    async findById(id: string): Promise<Transaction> {
        const transaction = await prisma.transaction.findUnique({
            where: {
                id
            }
        })

        return transaction
    }

    async findByName(description: string): Promise<Transaction> {
        const transaction = await prisma.transaction.findFirst({
            where: {
                description
            }
        })

        return transaction
    }

    async update({ id, description, type, category, price }: IUpdateTransactionDTO): Promise<void>{
        await prisma.transaction.update({
            where: { id },
            data: {
                description,
                type,
                category,
                price
            }
        })
    }
}