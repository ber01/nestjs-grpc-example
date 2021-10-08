import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { UserModule } from './user.module'
import * as Joi from 'joi'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        USER_SERVICE_URL: Joi.string().required(),
        USER_SERVICE_PORT: Joi.number().required(),
      }),
    }),
    UserModule,
  ],
})
export class AppModule {}
