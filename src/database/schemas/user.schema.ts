import { Schema , Prop, SchemaFactory} from "@nestjs/mongoose";
import { User } from "../../modules/user/entities/user.entity";
import { Document, Model } from "mongoose";

@Schema({collection: 'users'})
class UserSchema implements User {
    
    //@Prop({required: true, unique:true, index:true})
    id: string;
    
    @Prop({required: true, unique:true})
    email:string
    
    @Prop({required: true, unique:true})
    userName: string;
    
    @Prop({required: true})
    password:string
    
    @Prop({default: Date.now()})
    createdAt: Date;

}

export const UserSchemaMongo = SchemaFactory.createForClass(UserSchema);
export type UserDocument = UserSchema & Document;
export type UserModel = Model<UserSchema>