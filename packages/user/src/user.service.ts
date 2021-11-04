import {
  CreateUserCommand,
  GetUserByEmailQuery,
  GetUserResult,
  User,
  UserCreatedEvent,
} from '@example/common/lib'
import { Injectable } from '@nestjs/common'
import uuid4 from 'uuid4'
import { users } from './main'

@Injectable()
export class UserService {
  public getUserByEmail(request: GetUserByEmailQuery): GetUserResult {
    const user = users.find(({ email }) => email === request.email)
    return { user }
  }

  public createUser(request: CreateUserCommand): UserCreatedEvent {
    const user: User = {
      id: uuid4(),
      email: request.email,
      name: request.name,
    }
    users.push(user)
    return { id: user.id }
  }
}
