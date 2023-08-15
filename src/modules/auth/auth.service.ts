import { Inject, Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { SignInDto } from './dto/signIn-auth.dto';
import { SignUpDto } from './dto/signUp-auth.dto';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
  
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    ) {}

  async signUp(signUpDto: SignUpDto) {
    const user = await this.userService.findOneByEmail(signUpDto.email);
    if(!user){ 
      const {confirm, ...createUserDto} = signUpDto;
      return await this.userService.create(createUserDto)
    }
    throw new ConflictException("Ya existe un usuario con ese email");
  }

  async signIn(signInDto: SignInDto) {
    const user = await this.userService.findOneByEmail(signInDto.email);
    if (user?.password !== signInDto.password) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, username: user.userName };
    return {
      token: await this.jwtService.signAsync(payload),
    };
  }

}
