import {  PickType } from '@nestjs/mapped-types';
import { SignUpDto } from './signUp-auth.dto';

export class SignInDto extends PickType(SignUpDto, ['email', 'password']) {}