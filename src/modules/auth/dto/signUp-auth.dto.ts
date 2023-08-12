import { IsEmail, IsNotEmpty, IsString, Length, Matches, Validate } from 'class-validator'
import { PasswordMatchConstraint } from '../utils/validators';
import { ERROR_MESSAGES } from 'src/utils/errors/messages.errors';
import { REGEX } from 'src/utils/regex.utils';

export class SignUpDto{
    
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    userName: string;

    @IsString()
    @Length(8, 24)
    @Matches(REGEX.PASSWORD_RULE, { message: ERROR_MESSAGES.PASSWORD_RULE_MESSAGE })
    password: string;

    @IsString()
    @IsNotEmpty()
    @Validate(PasswordMatchConstraint, ['password'], {
    message: ERROR_MESSAGES.PASSWORD_MATCH_MESSAGE,
    })
    confirm: string;

}
