import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as morgan from 'morgan'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['debug', 'log'],
  });
  app.enableCors({
    origin: '*',
    methods: 'GET, HEAD, PUT, POST, DELETE, PATCH',
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  });

  const config = new DocumentBuilder()
    .setTitle('Conexa Challenge')
    .setDescription('This api is of challenge purpose only')
    .setVersion('1.0')
    .addTag('conexa')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
  }));
  app.use(morgan('common'));
  
  await app.listen(process.env.PORT);
  console.log("Nest app listening on port " + process.env.PORT || 8000)
}
bootstrap();


