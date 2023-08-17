import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchemaMongo } from './schemas/user.schema';
import { User } from 'src/modules/user/entities/user.entity';
import { USER_REPOSITORY, UserRepository } from 'src/modules/user/user.repository';
import { MongoUsersRepository } from './repositories/mongo-users-repository';
import { HttpModule } from '@nestjs/axios';
import { StarWarsApiService } from './star-wars-api/star-wars-api.service';
import { DatabaseService } from './database-preload.service';
import { FILM_REPOSITORY } from 'src/modules/film/film.repository';
import { MongoFilmRepository } from './repositories/mongo-films-repository';
import { Film } from 'src/modules/film/entities/film.entity';
import { FilmSchemaMongo } from './schemas/film.schema';
import { FilmModule } from 'src/modules/film/film.module';
import { DatabaseController } from './database.controller';
import { AuthGuard } from 'src/modules/auth/auth.guard';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthModule } from 'src/modules/auth/auth.module';

@Global()
@Module({    
    imports: [
      ConfigModule,
      MongooseModule.forRootAsync({
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: async (configService: ConfigService) => {
          return { uri: configService.get('MONGO_URI') };
        },
      }),
      MongooseModule.forFeature([
        {name : User.name, schema: UserSchemaMongo},
        {name: Film.name, schema: FilmSchemaMongo}
      ]),
      HttpModule,
      FilmModule,
      AuthModule
    ],
    providers:[
        {
            provide: USER_REPOSITORY,
            useClass: MongoUsersRepository
        },
        {
          provide: FILM_REPOSITORY,
          useClass: MongoFilmRepository
        },
        StarWarsApiService,
        DatabaseService,
        AuthGuard,
        JwtService
    ],
    exports: [USER_REPOSITORY, FILM_REPOSITORY, StarWarsApiService],
    controllers: [DatabaseController]
})

export class DatabaseModule {}
