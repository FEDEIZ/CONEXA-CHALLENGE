import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { users as data } from './users.data';
import { USER_REPOSITORY, UserRepository } from './user.repository';

@Injectable()
export class UserService {

  private users: User[];

  constructor(@Inject(USER_REPOSITORY) private readonly repository : UserRepository){
  }

  async create(createUserDto: CreateUserDto) {
    return await this.repository.create(createUserDto as User);
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number){
    return `This action returns a #${id} user`;
  }

  async findOneByEmail(email: string){
    return (await this.repository.search({email}))[0];
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
