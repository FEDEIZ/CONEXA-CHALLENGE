import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SignInDto } from './dto/signIn-auth.dto';
import { SignUpDto } from './dto/signUp-auth.dto';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  
  constructor(
    private userService: UserService,
    private jwtService: JwtService
    ) {}

  signUp(signUpDto: SignUpDto) {
    return 'This action register a user';
  }

  async signIn(signInDto: SignInDto) {
    const user = await this.userService.findOneByEmail(signInDto.email);
    if (user?.password !== signInDto.password) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, username: user.userName };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

}
