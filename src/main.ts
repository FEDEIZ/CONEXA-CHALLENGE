import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as morgan from 'morgan'
import * as cors from 'cors'; 

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['debug', 'log'],
  });
  // app.use(cors());
  app.enableCors({
    origin: '*',
    methods: 'GET, HEAD, PUT, POST, DELETE, PATCH',
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  });
  
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
  }));
  app.use(morgan('common'));
  
  await app.listen(process.env.PORT);
  console.log("Nest app listening on port " + process.env.PORT || 8000)
}
bootstrap();

// import * as http from 'http';

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello, World!\n');
// });

// const PORT = process.env.PORT || 8000;

// server.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`);
// });
