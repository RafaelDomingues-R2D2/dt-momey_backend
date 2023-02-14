import { Transaction } from "@prisma/client";
import { prisma } from "../../../../shared/infra/database/prismaClient";
import { ICreateTransactionDTO } from "../../dtos/ICreateTransactionDTO";
import { IUpdateTransactionDTO } from "../../dtos/IUpdateTransactionDTO";
import { ITransactionsRepository } from "../ITransactionsRepository";

export class TransactionRepository implements ITransactionsRepository {
    async create({ name, type, category, price }: ICreateTransactionDTO): Promise<void>{
        await prisma.transaction.create({
            data: {
                name,
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

    async findByName(name: string): Promise<Transaction> {
        const transaction = await prisma.transaction.findFirst({
            where: {
                name
            }
        })

        return transaction
    }

    async update({ id, name, type, category, price }: IUpdateTransactionDTO): Promise<void>{
        await prisma.transaction.update({
            where: { id },
            data: {
                name,
                type,
                category,
                price
            }
        })
    }
}