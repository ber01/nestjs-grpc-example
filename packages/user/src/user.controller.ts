import {
  CreateUserCommand,
  GetUserByEmailQuery,
  GetUserResult,
  GetUsersResult,
  UserCreatedEvent,
  UserServiceController,
  UserServiceControllerMethods,
} from '@example/common'
import { Body, Controller } from '@nestjs/common'
import { IsUserByEmailPipe } from './pipes'
import { UserService } from './user.service'

@Controller()
@UserServiceControllerMethods()
export class UserController implements UserServiceController {
  constructor(private readonly userService: UserService) {}

  public getUserByEmail(request: GetUserByEmailQuery): GetUserResult {
    return this.userService.getUserByEmail(request)
  }

  public createUser(
    @Body(IsUserByEmailPipe) request: CreateUserCommand,
  ): UserCreatedEvent {
    return this.userService.createUser(request)
  }

  public getUsers(): GetUsersResult {
    return this.userService.getUsers()
  }
}
