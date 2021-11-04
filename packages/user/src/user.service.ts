import { GetUserByEmailQuery, GetUserResult } from '@example/common/lib'
import { Injectable } from '@nestjs/common'
import { users } from './main'

@Injectable()
export class UserService {
  public getUserByEmail(request: GetUserByEmailQuery): GetUserResult {
    const user = users.find(({ email }) => email === request.email)
    return { user }
  }
}
