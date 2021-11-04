import {
  GetUserByEmailQuery,
  GetUserResult,
  UserServiceController,
  UserServiceControllerMethods,
} from '@example/common'
import { Controller } from '@nestjs/common'
import { UserService } from './user.service'

@Controller()
@UserServiceControllerMethods()
export class UserController implements UserServiceController {
  constructor(private readonly userService: UserService) {}

  public getUserByEmail(request: GetUserByEmailQuery): GetUserResult {
    return this.userService.getUserByEmail(request)
  }
}
