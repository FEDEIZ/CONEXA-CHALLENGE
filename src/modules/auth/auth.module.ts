import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthGuard } from './auth.guard';
import { AppModule } from 'src/app.module';
import { ConfigurationModule } from 'src/config/config.module';


@Module({
  controllers: [AuthController],
  providers: [AuthService, AuthGuard],
  imports: [
    UserModule,
    ConfigurationModule
  ],
  exports:[AuthGuard]
})
export class AuthModule {}
