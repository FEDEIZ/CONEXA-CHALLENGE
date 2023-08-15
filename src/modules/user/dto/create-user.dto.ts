import { PickType } from "@nestjs/mapped-types";
import { SignUpDto } from "src/modules/auth/dto/signUp-auth.dto";

export class CreateUserDto extends PickType(SignUpDto, ['email','userName', 'password']) {}
