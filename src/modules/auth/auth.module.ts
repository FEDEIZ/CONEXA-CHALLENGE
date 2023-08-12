import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';


@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    UserModule,
    JwtModule.registerAsync({
      imports:[ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        global: true,
        secret: configService.get('JWT_SECRET'), // Usa el valor de la variable de entorno
        signOptions: { expiresIn: '60s' },
      }),
      inject: [ConfigService], // Inyecta ConfigService en el factory
    }),
  ]
})
export class AuthModule {}
