import { User } from "@prisma/client"

import { ICreateUserDTO } from "../dtos/ICreateUserDTO"

export interface IUsersRepository {
    create(data: ICreateUserDTO): Promise<void>
    findByEmail(email: string): Promise<User>
    findById(id: string): Promise<User>
    update(id: string, avatar: string): Promise<void>
}