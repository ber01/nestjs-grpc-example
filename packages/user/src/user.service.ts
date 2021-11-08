import {
  CreateUserCommand,
  GetUserByEmailQuery,
  GetUserResult,
  GetUsersResult,
  UserCreatedEvent,
} from '@example/common/lib'
import { Injectable } from '@nestjs/common'
import { UserRepository } from './users.repository'

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  public getUserByEmail(request: GetUserByEmailQuery): GetUserResult {
    const { email } = request
    const user = this.userRepository.findByEmail(email)
    return { user }
  }

  public createUser(request: CreateUserCommand): UserCreatedEvent {
    const id = this.userRepository.save(request)
    return { id }
  }

  public getUsers(): GetUsersResult {
    const users = this.userRepository.findAll()
    return { users }
  }
}
