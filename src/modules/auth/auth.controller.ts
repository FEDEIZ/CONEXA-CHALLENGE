import { Controller, Get, Post, Body, Request, HttpStatus, HttpCode, UseGuards, SetMetadata } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/signIn-auth.dto';
import { AuthGuard } from './auth.guard';
import { SignUpDto } from './dto/signUp-auth.dto';
import { Roles } from './decorators/roles.decorator';
import {Roles as RolesEnum} from './../user/entities/user.entity'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @HttpCode(HttpStatus.OK)
  @Post('signIn')
  signIn(
    @Body() signInDto : SignInDto,
  ){
    return this.authService.signIn(signInDto);
  }
  
  @Post('signUp')
  signUp(
    @Body() signUpDto : SignUpDto,
  ){
    return this.authService.signUp(signUpDto);
  }

  @UseGuards(AuthGuard)
  @Roles(RolesEnum.admin, RolesEnum.user)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
