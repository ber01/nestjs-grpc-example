/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices'
import Long from 'long'
import _m0 from 'protobufjs/minimal'
import { Observable } from 'rxjs'

export interface User {
  id: string
  name: string
  email: string
}

export interface GetUserByEmailQuery {
  email: string
}

export interface GetUsersQuery {}

export interface GetUserResult {
  user?: User | undefined
}

export interface GetUsersResult {
  users: User[]
}

export interface CreateUserCommand {
  name: string
  email: string
}

export interface UserCreatedEvent {
  id: string
}

export const USER_PACKAGE_NAME = 'user'

export interface UserServiceClient {
  getUserByEmail(request: GetUserByEmailQuery): Observable<GetUserResult>

  createUser(request: CreateUserCommand): Observable<UserCreatedEvent>

  getUsers(request: GetUsersQuery): Observable<GetUsersResult>
}

export interface UserServiceController {
  getUserByEmail(
    request: GetUserByEmailQuery,
  ): Promise<GetUserResult> | Observable<GetUserResult> | GetUserResult

  createUser(
    request: CreateUserCommand,
  ): Promise<UserCreatedEvent> | Observable<UserCreatedEvent> | UserCreatedEvent

  getUsers(
    request: GetUsersQuery,
  ): Promise<GetUsersResult> | Observable<GetUsersResult> | GetUsersResult
}

export function UserServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ['getUserByEmail', 'createUser', 'getUsers']
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      )
      GrpcMethod('UserService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      )
    }
    const grpcStreamMethods: string[] = []
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      )
      GrpcStreamMethod('UserService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      )
    }
  }
}

export const USER_SERVICE_NAME = 'UserService'

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any
  _m0.configure()
}
