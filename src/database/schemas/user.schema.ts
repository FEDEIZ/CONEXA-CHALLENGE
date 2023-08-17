import { Schema , Prop, SchemaFactory} from "@nestjs/mongoose";
import { Roles, User } from "../../modules/user/entities/user.entity";
import { Document, Model } from "mongoose";

@Schema({collection: 'users'})
class UserSchema implements User {
    
    _id: string;
    
    @Prop({required: true, unique:true, index:true})
    email:string
    
    @Prop({required: true})
    userName: string;
    
    @Prop({required: true})
    password:string
    
    @Prop({default: Roles.user})
    role: Roles;
    
    @Prop({default: Date.now()})
    createdAt: Date;

}

export const UserSchemaMongo = SchemaFactory.createForClass(UserSchema);
export type UserDocument = UserSchema & Document;
export type UserModel = Model<UserSchema>