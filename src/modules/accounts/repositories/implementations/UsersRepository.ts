import { User } from "@prisma/client"

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO"
import { prisma } from "../../../../shared/infra/database/prismaClient"
import { IUsersRepository } from "../IUsersRepository"

export class UsersRepository implements IUsersRepository {

    async create({name, email, password, id, avatar}: ICreateUserDTO): Promise<void> {
        await prisma.user.create({
            data: {
                name,
                email,
                password,
                id,
                avatar
            },
        })
    }

    async findByEmail(email: string): Promise<User> {
        const user = await prisma.user.findFirst({
            where: { 
                email 
            } 
        })

        return user
    }

    async findById(id: string): Promise<User> {
        const user = await prisma.user.findUnique({ 
            where: { 
                id 
            }
        })

        return user
    }

    async update(id: string, avatar: string): Promise<void> {
        await prisma.user.update({
          where: { id },
          data: {
            avatar,
          },
        })
      }

}