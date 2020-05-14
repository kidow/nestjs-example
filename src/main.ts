import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { NestExpressApplication } from '@nestjs/platform-express'

NestFactory.create<NestExpressApplication>(AppModule).then(app => app.listen(5000))
