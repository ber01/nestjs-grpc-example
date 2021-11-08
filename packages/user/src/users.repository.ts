import { CreateUserCommand, User } from '@example/common/lib'
import { Injectable } from '@nestjs/common'
import uuid4 from 'uuid4'
import { users } from './main'

@Injectable()
export class UserRepository {
  public findByEmail(email: string): User | undefined {
    return users.find((user) => user.email === email)
  }

  public save(dto: CreateUserCommand): string {
    const user: User = {
      id: uuid4(),
      email: dto.email,
      name: dto.name,
    }
    users.push(user)
    return user.id
  }

  public findAll(): User[] {
    return users
  }
}
