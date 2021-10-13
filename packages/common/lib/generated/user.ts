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

export interface GetUserResult {
  user?: User | undefined
}

export const USER_PACKAGE_NAME = 'user'

export interface UserServiceClient {
  getUserByEmail(request: GetUserByEmailQuery): Observable<GetUserResult>
}

export interface UserServiceController {
  getUserByEmail(
    request: GetUserByEmailQuery,
  ): Promise<GetUserResult> | Observable<GetUserResult> | GetUserResult
}

export function UserServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ['getUserByEmail']
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
