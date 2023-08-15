import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "src/modules/user/entities/user.entity";
import { UserRepository } from "src/modules/user/user.repository";
import { UserModel } from "../schemas/user.schema";
import { SearchQuery } from "src/utils/interfaces/ICRUD";

@Injectable()
export class MongoUsersRepository implements UserRepository{
    
    constructor(@InjectModel(User.name) private readonly userModel: UserModel){}

    async create(item: User): Promise<User> {
        const user = await new this.userModel(item).save();
        return user as User;
    }
    read(id: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    update(id: string, item: User): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    
    async search(query: SearchQuery<User>): Promise<User[]> {
        return await this.userModel.find(query).exec();
    }
    
}