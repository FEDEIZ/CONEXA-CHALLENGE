import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as morgan from 'morgan'


async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['debug', 'log'],
  });
  app.useGlobalPipes(new ValidationPipe());
  app.use(morgan('dev'));
  await app.listen(3000);
  console.log("Nest app listening on port 3000")
}
bootstrap();
