import {
  GetUserByEmailQuery,
  GetUserResult,
  User,
  UserServiceController,
  UserServiceControllerMethods,
} from '@example/common/lib/generated/user'
import { Controller } from '@nestjs/common'

@Controller()
@UserServiceControllerMethods()
export class UserController implements UserServiceController {
  private readonly users: User[] = [
    {
      id: '5c47afc0-a8ee-482c-a274-97f2a2742cbc',
      name: 'minkh',
      email: 'ksyj8256@gmail.com',
    },
    {
      id: 'f1be9dac-47aa-4594-9de6-a0d070decb1c',
      name: 'hkd',
      email: 'hkd1234@gmail.com',
    },
  ]

  public getUserByEmail(request: GetUserByEmailQuery): GetUserResult {
    const user = this.users.find(({ email }) => email === request.email)
    return { user }
  }
}
