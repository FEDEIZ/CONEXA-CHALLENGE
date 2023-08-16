import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { MongooseModule } from '@nestjs/mongoose';
import { FilmModule } from './modules/film/film.module';

@Module({
  imports: [
    AuthModule, 
    UserModule, 
    ConfigModule.forRoot({isGlobal: true}), 
    DatabaseModule, FilmModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
