import { Controller, Get, Post, Body, Request, HttpStatus, HttpCode, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/signIn-auth.dto';
import { AuthGuard } from './auth.guard';
import { SignUpDto } from './dto/signUp-auth.dto';


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
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
