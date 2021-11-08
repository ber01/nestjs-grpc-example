import { CreateUserCommand } from '@example/common/lib'
import { status } from '@grpc/grpc-js'
import { Injectable, PipeTransform } from '@nestjs/common'
import { RpcException } from '@nestjs/microservices'
import { UserRepository } from '../users.repository'

@Injectable()
export class IsUserByEmailPipe implements PipeTransform {
  constructor(private readonly userRepository: UserRepository) {}

  public async transform(value: CreateUserCommand): Promise<CreateUserCommand> {
    const { email } = value

    const user = this.userRepository.findByEmail(email)
    if (user) {
      throw new RpcException({
        code: status.ALREADY_EXISTS,
        message: 'Email already exists.',
      })
    }

    return value
  }
}
