import { Inject, Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { SignInDto } from './dto/signIn-auth.dto';
import { SignUpDto } from './dto/signUp-auth.dto';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import processPassword from './utils/processPassword';
import { ConfigService } from '@nestjs/config';
import { User } from '../user/entities/user.entity';


@Injectable()
export class AuthService {
  
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private configService: ConfigService
    ) {}

  async signUp(signUpDto: SignUpDto) {
    const user = await this.userService.findOneByEmail(signUpDto.email);
    if(!user){ 
      const {confirm, ...createUserDto} = signUpDto;
      createUserDto.password = await processPassword.hashPassword(
            createUserDto.password, 
            +this.configService.get('SALT')
            );
      const user = await this.userService.create(createUserDto);
      user.password = '';
      return user;
    }
    throw new ConflictException("Ya existe un usuario con ese email");
  }

  async signIn(signInDto: SignInDto) {
    const user = await this.userService.findOneByEmail(signInDto.email);
    if (!processPassword.compare(signInDto.password,user.password)) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, username: user.userName, role: user.role };
    return {
      token: await this.jwtService.signAsync(payload),
    };
  }

}
