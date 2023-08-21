import { IsEmail, IsNotEmpty, IsString, Length, Matches, Validate } from 'class-validator'
import { PasswordMatchConstraint } from '../utils/validators';
import { ERROR_MESSAGES } from 'src/utils/errors/messages.errors';
import { REGEX } from 'src/utils/regex.utils';
import { ApiProperty } from '@nestjs/swagger';

export class SignUpDto{
    
    @ApiProperty()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    userName: string;

    @ApiProperty()
    @IsString()
    @Length(8, 24)
    @Matches(REGEX.PASSWORD_RULE, { message: ERROR_MESSAGES.PASSWORD_RULE_MESSAGE })
    password: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @Validate(PasswordMatchConstraint, ['password'], {
    message: ERROR_MESSAGES.PASSWORD_MATCH_MESSAGE,
    })
    confirm: string;

}
