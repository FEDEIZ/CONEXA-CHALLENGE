import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from '../user/user.service';
import { JwtModule } from '@nestjs/jwt';
import env from 'src/utils/env.utils';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    UserService,
    JwtModule.register({
      global: true,
      secret: env.jwtSecret,
      signOptions: { expiresIn: '60s' },
    }),
  ]
})
export class AuthModule {}
