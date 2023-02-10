import { ICreateTransactionDTO } from "../dtos/ICreateTransactionDTO";

export interface ITransactionRepository {
    create(data: ICreateTransactionDTO): Promise<void>
}