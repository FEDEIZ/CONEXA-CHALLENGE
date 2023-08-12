import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { users as data } from './users.data';
import * as fs from 'fs';
import * as path from 'path'

@Injectable()
export class UserService {

  private users: User[];

  constructor(){
    this.users = data;
  }

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number){
    return `This action returns a #${id} user`;
  }

  async findOneByEmail(email: string){
    return this.users.find(user => user.email === email);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
