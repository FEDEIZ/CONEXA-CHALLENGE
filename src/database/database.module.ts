import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchemaMongo } from './schemas/user.schema';
import { User } from 'src/modules/user/entities/user.entity';
import { USER_REPOSITORY, UserRepository } from 'src/modules/user/user.repository';
import { MongoUsersRepository } from './repositories/mongo-users-repository';

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
        {name : User.name, schema: UserSchemaMongo}
      ])
    ],
    providers:[
        {
            provide: USER_REPOSITORY,
            useClass: MongoUsersRepository
        }
    ],
    exports: [USER_REPOSITORY]
})

export class DatabaseModule {}
