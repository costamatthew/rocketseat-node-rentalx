import { getRepository, Repository } from 'typeorm'

import { ICreateUserDTO } from '../../../dtos/ICreateUserDTO'
import { User } from '../entities/User'
import { IUsersRepository } from '../../../repositories/IUsersRepository'

class UsersRepository implements IUsersRepository {
    private repository: Repository<User>

    constructor() {
        this.repository = getRepository(User)
    }

    async create(data: ICreateUserDTO): Promise<void> {
        const { name, email, password, driver_license, avatar, id } = data

        const user = this.repository.create({
            name,
            email,
            password,
            driver_license,
            avatar,
            id
        })

        await this.repository.save(user)
    }

    async findByEmail(email: string): Promise<User> {
        return await this.repository.findOne({ email })
    }

    async findById(id: string): Promise<User> {
        return await this.repository.findOne(id)
    }
}

export { UsersRepository }
