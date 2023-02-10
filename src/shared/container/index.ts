import { container } from "tsyringe"

import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository"
import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository"

import { ITransactionRepository } from "../../modules/transactions/repositories/ITransactionsRepository"
import { TransactionRepository } from "../../modules/transactions/repositories/implementations/TransactionsRepository"

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
)

container.registerSingleton<ITransactionRepository>(
    "TransactionRepository",
    TransactionRepository
)