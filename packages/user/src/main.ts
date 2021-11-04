import { User, userProtoPath } from '@example/common'
import { Logger } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import {
  ClientOptions,
  MicroserviceOptions,
  Transport,
} from '@nestjs/microservices'
import { AppModule } from './app.module'

export const users: User[] = [
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

const logger = new Logger(bootstrap.name)
const configService = new ConfigService()

const URL = configService.get('USER_SERVICE_URL')
const PORT = configService.get('USER_SERVICE_PORT')

const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: URL + ':' + PORT,
    package: 'user',
    protoPath: userProtoPath,
  },
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.connectMicroservice<MicroserviceOptions>(grpcClientOptions)

  await app.startAllMicroservices()
  await app.listen(PORT)
  logger.log('Hello World!')
}

bootstrap()
